/**
 * PORTFOLIO APPLICATION LOGIC - Richenel D. OUSSOUKPEVI
 * Logique d'interaction : Rendu dynamique, Thème Sombre/Clair, Modale, Filtres, Toasts.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialiser le Thème (Sombre / Clair)
  initTheme();

  // 2. Initialiser la Navigation & ScrollSpy
  initNavigation();

  // 3. Rendu Dynamique des Contenus depuis data.js
  renderPortfolio();

  // 4. Initialiser la Modale Projets
  initProjectModal();

  // 5. Initialiser les Filtres de la Galerie
  initGalleryFilters();

  // 6. Initialiser le Formulaire de Contact & Copie
  initContactInteractions();
});

/* ==========================================================================
   1. GESTION DU THÈME SOMBRE / CLAIR
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');

  // Vérifier le thème enregistré ou la préférence système
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
    document.body.classList.add('light-theme');
    if (themeIcon) themeIcon.textContent = '☀️';
  } else {
    document.body.classList.remove('light-theme');
    if (themeIcon) themeIcon.textContent = '🌙';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      if (themeIcon) {
        themeIcon.textContent = isLight ? '☀️' : '🌙';
      }
      showToast(isLight ? 'Thème Clair activé' : 'Thème Sombre activé');
    });
  }
}

/* ==========================================================================
   2. NAVIGATION, SCROLLSPY & MENU MOBILE
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.header');
  const burgerBtn = document.getElementById('burger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Ombre et réduction du header au défilement
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // ScrollSpy : Mettre à jour le lien actif
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // Basculement Menu Mobile
  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Fermer le menu lors du clic sur un lien
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  // Bouton Retour en Haut
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   3. RENDU DYNAMIQUE DES DONNÉES DEPUIS data.js
   ========================================================================== */
function renderPortfolio() {
  if (typeof PORTFOLIO_DATA === 'undefined') return;

  // Rendu du Cursus
  renderCursus();

  // Rendu des 4 Projets Phares
  renderProjects();

  // Rendu des Compétences
  renderSkills();

  // Rendu du Parcours IA
  renderAIJourney();

  // Rendu de la Galerie
  renderGallery();

  // Rendu des Repositories GitHub
  renderGitHubRepos();
}

function renderCursus() {
  const container = document.getElementById('cursus-container');
  if (!container || !PORTFOLIO_DATA.cursus) return;

  container.innerHTML = PORTFOLIO_DATA.cursus.map(item => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <h3 class="timeline-title">${item.degree}</h3>
          <span class="timeline-badge">${item.status}</span>
        </div>
        <div class="timeline-institution">📍 ${item.institution} · <span style="opacity:0.8;">${item.location}</span></div>
        <p class="timeline-desc">${item.description}</p>
        <ul class="timeline-highlights">
          ${item.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div class="tag-list">
          ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container || !PORTFOLIO_DATA.projects) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map((proj, idx) => `
    <article class="project-card" data-project-id="${proj.id}">
      <div class="project-info">
        <div class="project-badge-row">
          <span class="project-badge">${proj.badge}</span>
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">Projet 0${idx + 1}</span>
        </div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-subtitle">${proj.subtitle}</p>
        <p class="project-desc">${proj.description}</p>
        
        <div class="project-details-mini">
          <div class="mini-detail-row">
            <strong>🎯 Problème :</strong> ${proj.problem}
          </div>
          <div class="mini-detail-row">
            <strong>💡 Solution :</strong> ${proj.solution}
          </div>
          <div class="mini-detail-row">
            <strong>📈 Impact :</strong> ${proj.impact}
          </div>
        </div>

        <div class="project-tags">
          ${proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="project-actions">
          <button class="btn btn-primary open-modal-btn" data-id="${proj.id}">
            <span>Détails & Architecture</span> <span>→</span>
          </button>
          <a href="${proj.githubUrl}" class="btn btn-outline" target="_blank" rel="noopener noreferrer" title="Lien vers le code source">
            <span>Code</span> <code>[GitHub]</code>
          </a>
        </div>
      </div>

      <div class="project-preview">
        <div class="preview-browser-bar">
          <span class="browser-dot red"></span>
          <span class="browser-dot yellow"></span>
          <span class="browser-dot green"></span>
          <span class="browser-label">architecture.json</span>
        </div>
        <div class="architecture-box">
          ${proj.architecture}
        </div>
        <div class="preview-snippet">
          <pre><code>${escapeHtml(proj.codeSnippet.split('\n').slice(0, 7).join('\n'))}
...</code></pre>
        </div>
      </div>
    </article>
  `).join('');
}

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container || !PORTFOLIO_DATA.skills) return;

  container.innerHTML = PORTFOLIO_DATA.skills.categories.map(cat => `
    <div class="skill-category-card">
      <div class="skill-header">
        <div class="skill-icon-box">
          ${getCategoryIcon(cat.icon)}
        </div>
        <div>
          <h3>${cat.title}</h3>
        </div>
      </div>
      <p class="skill-desc">${cat.description}</p>
      <div class="skill-badges-wrapper">
        ${cat.skills.map(s => `
          <div class="skill-chip ${s.highlight ? 'highlight' : ''}" title="${s.note || s.name}">
            <span>${s.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderAIJourney() {
  const container = document.getElementById('journey-container');
  if (!container || !PORTFOLIO_DATA.aiJourney) return;

  container.innerHTML = PORTFOLIO_DATA.aiJourney.map(j => `
    <div class="journey-step-card">
      <span class="step-number">${j.step}</span>
      <span class="step-status">${j.status}</span>
      <h4 class="step-title">${j.title}</h4>
      <p class="step-desc">${j.description}</p>
    </div>
  `).join('');
}

function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container || !PORTFOLIO_DATA.gallery) return;

  container.innerHTML = PORTFOLIO_DATA.gallery.map(item => `
    <div class="gallery-card" data-category="${item.category}">
      
      <div class="gallery-image-wrapper">
        <img 
          src="${item.image}" 
          alt="${item.title}" 
          class="gallery-image"
        />
        <span class="gallery-badge">${item.badge}</span>
      </div>

      <div class="gallery-body">
        <span class="gallery-date">${item.date}</span>
        <h4 class="gallery-title">${item.title}</h4>
        <p class="gallery-desc">${item.description}</p>
      </div>

    </div>
  `).join('');

}
function renderGitHubRepos() {
  const container = document.getElementById('repos-container');
  if (!container || !PORTFOLIO_DATA.githubShowcase) return;

  container.innerHTML = PORTFOLIO_DATA.githubShowcase.featuredRepos.map(repo => `
    <div class="repo-card">
      <div class="repo-header">
        <span class="repo-icon">📂</span>
        <span>${repo.name}</span>
      </div>
      <p class="repo-desc">${repo.description}</p>
      <div class="repo-footer">
        <div><span class="repo-lang-dot"></span>${repo.language}</div>
        <div>${repo.stars}</div>
        <a href="${repo.url}" target="_blank" rel="noopener noreferrer" style="margin-left: auto; color: var(--accent-cyan); font-weight: 600;">
          Voir ↗
        </a>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   4. MODALE TECHNIQUE DE DÉTAIL PROJET
   ========================================================================== */
function initProjectModal() {
  const modalOverlay = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-body-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay || !modalContent) return;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-modal-btn');
    if (!btn) return;
    const projId = btn.getAttribute('data-id');
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projId);
    if (!project) return;

    modalContent.innerHTML = `
      <div style="margin-bottom: 20px;">
        <span class="project-badge" style="display:inline-block; margin-bottom: 12px;">${project.badge}</span>
        <h2 style="font-family: var(--font-display); font-size: 1.85rem; color: var(--text-primary); margin-bottom: 6px;">
          ${project.title}
        </h2>
        <p style="color: var(--accent-cyan); font-weight: 600; font-size: 1rem;">
          ${project.subtitle}
        </p>
      </div>

      <div style="margin-bottom: 24px; line-height: 1.7; color: var(--text-secondary);">
        <p style="margin-bottom: 14px;">${project.description}</p>
      </div>

      <div style="background: var(--bg-tertiary); padding: 18px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 24px;">
        <div style="margin-bottom: 10px;"><strong>🎯 Problématique traitée :</strong> ${project.problem}</div>
        <div style="margin-bottom: 10px;"><strong>💡 Solution & Méthodologie :</strong> ${project.solution}</div>
        <div style="margin-bottom: 10px;"><strong>📊 Résultats obtenus :</strong> <code>${project.results}</code></div>
        <div><strong>🚀 Impact :</strong> ${project.impact}</div>
      </div>

      <div style="margin-bottom: 24px;">
        <h4 style="font-family: var(--font-display); margin-bottom: 10px; color: var(--text-primary);">
          Flux Architectural & Traitement :
        </h4>
        <div class="architecture-box" style="padding: 16px; font-size: 0.9rem;">
          ${project.architecture}
        </div>
      </div>

      <div style="margin-bottom: 28px;">
        <h4 style="font-family: var(--font-display); margin-bottom: 10px; color: var(--text-primary);">
          Extrait de Code Clé :
        </h4>
        <div class="preview-snippet">
          <pre><code>${escapeHtml(project.codeSnippet)}</code></pre>
        </div>
      </div>

      <div style="margin-bottom: 28px;">
        <h4 style="font-family: var(--font-display); margin-bottom: 10px; color: var(--text-primary);">
          Technologies & Outils :
        </h4>
        <div class="tag-list">
          ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 14px; flex-wrap: wrap;">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <span>Dépôt GitHub</span> <code>${project.githubUrl}</code>
        </a>
        <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
          <span>Démonstration</span> <code>${project.demoUrl}</code>
        </a>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   5. FILTRES DE LA GALERIE
   ========================================================================== */
function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const cards = document.querySelectorAll('.gallery-card');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; }, 10);
        } else {
          card.style.opacity = '0';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   6. CONTACT & INTERACTIONS (FORMULAIRE ET COPIE EMAIL)
   ========================================================================== */
function initContactInteractions() {
  // Copier l'adresse email
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const emailValue = btn.getAttribute('data-email') || PORTFOLIO_DATA.profile.social.email;
      navigator.clipboard.writeText(emailValue).then(() => {
        showToast(`Copié dans le presse-papier : ${emailValue}`);
      }).catch(() => {
        showToast(`Adresse : ${emailValue}`);
      });
    });
  });

  // Soumission du formulaire de contact
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        showToast('Veuillez renseigner tous les champs obligatoires.');
        return;
      }

      // Simulation réussie de prise de contact
      showToast(`Merci ${name} ! Votre message a bien été préparé.`);
      contactForm.reset();
    });
  }
}

/* ==========================================================================
   NOTIFICATIONS TOAST FLOTTANTES
   ========================================================================== */
function showToast(message) {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span><span>${message}</span>`;
  toastContainer.appendChild(toast);

  // Animation d'apparition
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Suppression après 3.5 secondes
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => { toast.remove(); }, 300);
  }, 3500);
}

/* ==========================================================================
   UTILITAIRES D'ICÔNES ET DE SÉCURITÉ
   ========================================================================== */
function getCategoryIcon(iconName) {
  switch (iconName) {
    case 'code': return '💻';
    case 'brain': return '🧠';
    case 'zap': return '⚡';
    case 'database': return '📊';
    case 'trophy': return '🏆';
    case 'book': return '📚';
    case 'cpu': return '🤖';
    case 'users': return '🌐';
    default: return '📁';
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
