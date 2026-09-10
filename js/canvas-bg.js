/**
 * CANVAS BACKGROUND - Neural & Mathematical Network Visualizer
 * Animation discrète et élégante représentant un réseau de neurones et des points de données.
 */

class MathNeuralCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 140 };
    this.animationFrameId = null;
    this.particleCount = 55;
    this.maxDistance = 150;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.isVisible = true;

    this.init();
  }

  init() {
    this.resize();
    this.createParticles();
    this.bindEvents();
    if (!this.isReducedMotion) {
      this.animate();
    } else {
      this.drawStatic();
    }
  }

  resize() {
    if (!this.canvas) return;
    const parent = this.canvas.parentElement;
    this.width = this.canvas.width = parent.clientWidth || window.innerWidth;
    this.height = this.canvas.height = parent.clientHeight || window.innerHeight;

    // Adapter le nombre de particules selon la résolution de l'écran
    if (this.width < 768) {
      this.particleCount = 28;
      this.maxDistance = 100;
    } else {
      this.particleCount = 60;
      this.maxDistance = 160;
    }
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.2 + 1.2,
        baseRadius: Math.random() * 2.2 + 1.2,
        isHub: Math.random() > 0.85 // Quelques nœuds centraux (hubs)
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
      if (this.isReducedMotion) this.drawStatic();
    });

    window.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });

    // Optimisation de la visibilité pour économiser le processeur/GPU
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.isVisible = entry.isIntersecting;
        if (this.isVisible && !this.animationFrameId && !this.isReducedMotion) {
          this.animate();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.canvas);
  }

  isDarkTheme() {
    return !document.body.classList.contains('light-theme');
  }

  drawStatic() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawConnections();
    this.drawNodes();
  }

  animate() {
    if (!this.isVisible) {
      this.animationFrameId = null;
      return;
    }

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Mettre à jour et dessiner les particules
    const dark = this.isDarkTheme();

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Mouvement inertiel
      p.x += p.vx;
      p.y += p.vy;

      // Rebond sur les bords
      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Interaction souris
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          p.x -= (dx / dist) * force * 3;
          p.y -= (dy / dist) * force * 3;
          p.radius = p.baseRadius * 1.6;
        } else {
          p.radius = p.baseRadius;
        }
      }
    }

    this.drawConnections(dark);
    this.drawNodes(dark);

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  drawConnections(dark) {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const p1 = this.particles[i];
        const p2 = this.particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.maxDistance) {
          const alpha = (1 - dist / this.maxDistance) * (dark ? 0.28 : 0.18);
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = dark
            ? `rgba(99, 179, 237, ${alpha})`
            : `rgba(90, 75, 218, ${alpha})`;
          this.ctx.lineWidth = p1.isHub || p2.isHub ? 1.4 : 0.9;
          this.ctx.stroke();
        }
      }
    }
  }

  drawNodes(dark) {
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

      if (p.isHub) {
        // Nœud spécial plus lumineux
        this.ctx.fillStyle = dark ? '#00e5ff' : '#7c3aed';
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = dark ? '#00e5ff' : '#7c3aed';
      } else {
        this.ctx.fillStyle = dark ? 'rgba(160, 174, 192, 0.75)' : 'rgba(74, 85, 104, 0.7)';
        this.ctx.shadowBlur = 0;
      }

      this.ctx.fill();
    }
    this.ctx.shadowBlur = 0;
  }
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  new MathNeuralCanvas('hero-canvas');
});
