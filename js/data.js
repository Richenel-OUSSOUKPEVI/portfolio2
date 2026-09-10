/**
 * PORTFOLIO DATA - Richenel D. OUSSOUKPEVI
 * Fichier centralisé de données pour le portfolio.
 * Permet de modifier facilement les contenus sans toucher au code HTML.
 */

const PORTFOLIO_DATA = {
  profile: {
    fullName: "Richenel D. OUSSOUKPEVI",
    shortName: "Richenel",
    title: "Élève ingénieur en Génie Mathématique & Modélisation",
    tagline: "Passionné par la Data Science et l'Intelligence Artificielle, je transforme les données et les modèles mathématiques en solutions intelligentes.",
    headlineBadge: "AI × DATA × MATHEMATICS × ENGINEERING",
    statusBadge: "Étudiant Ingénieur · À l'écoute d'opportunités (Stage / Junior)",
    philosophy: "Apprendre en construisant.",
    location: "Abomey / Cotonou, Bénin",
    school: "ENSGMM — UNSTIM, Abomey, Bénin",
    photo: "assets/images/richenel-oussoukpevi.jpg",
    bio: [
      "Je suis élève ingénieur en Génie Mathématique et Modélisation (GMM). Ma formation me permet de développer une base solide et rigoureuse en mathématiques appliquées, modélisation, statistiques, optimisation, analyse numérique et informatique scientifique.",
      "En parallèle de mon cursus, je construis activement mes compétences en Data Science et Intelligence Artificielle à travers des formations spécialisées, des challenges compétitifs, des projets personnels et des expérimentations concrètes.",
      "Guidé par la conviction d'« Apprendre en construisant », mon objectif est de poursuivre mon évolution vers des rôles à forte valeur ajoutée : Data Science → Machine Learning → AI Engineering."
    ],
    social: {
      github: "https://github.com/Richenel-OUSSOUKPEVI",
      linkedin: "https://www.linkedin.com/in/richenel-oussoukpevi-80ba372a1/",
      email: "richenelspacecode@gmail.com",
      displayEmail: "[oussoukpevirichenel@gmail.com]"
    }
  },

  cursus: [
    {
      id: "ensgmm",
      degree: "Diplôme d'Ingénieur de Conception en Génie Mathématique et Modélisation (GMM)",
      institution: "École Nationale Supérieure de Génie Mathématique et Modélisation (ENSGMM) — UNSTIM",
      location: "Abomey, Bénin",
      period: "Formation en cours",
      status: "En cours",
      description: "Formation d'excellence axée sur la modélisation mathématique, la simulation numérique, le calcul scientifique et les statistiques appliquées à la résolution de systèmes complexes.",
      highlights: [
        "Mathématiques appliquées & Analyse numérique",
        "Modélisation stochastique, probabiliste & statistique",
        "Optimisation linéaire et non-linéaire",
        "Programmation & Informatique scientifique",
        "Orientation continue vers la modélisation numérique, la Data Science et l'Intelligence Artificielle"
      ],
      tags: ["Mathématiques Appliquées", "Modélisation", "Calcul Scientifique", "Statistiques", "Optimisation"]
    },
    {
      id: "evolution",
      degree: "Développement Continu & Spécialisation Data / AI",
      institution: "Projets Autonomes, Formations & Compétitions",
      location: "Bénin / En ligne",
      period: "En continu",
      status: "En progression",
      description: "Approfondissement technique autodidacte et collaboratif des architectures de Machine Learning, du Deep Learning appliqué aux données biologiques et du génie logiciel pour l'IA (FastAPI, LLM APIs).",
      highlights: [
        "Réalisation de projets concrets de bout en bout",
        "Participation à des challenges d'apprentissage automatique",
        "Veille active sur les modèles génératifs et l'AI Engineering"
      ],
      tags: ["Data Science", "Machine Learning", "Deep Learning", "AI Engineering"]
    }
  ],

  projects: [
    {
      id: "gpt-chatbot-api",
      title: "Application & Chatbot IA avec API GPT",
      category: "AI Engineering & Backend",
      badge: "AI Engineering",
      subtitle: "Backend moderne & intégration d'un modèle de langage pour une application interactive",
      description: "Conception et développement d'une application web intégrant un modèle de langage (GPT) via l'API OpenAI. Ce projet démontre ma capacité à créer un backend Python robuste, à gérer les variables d'environnement de manière sécurisée et à concevoir une architecture API REST prête pour la production.",
      problem: "Nécessité de structurer une application web fiable capable d'interagir avec les modèles de fondation d'OpenAI tout en garantissant la sécurité des clés d'API, une latence maîtrisée et une interface logicielle claire.",
      solution: "Création d'une architecture backend asynchrone avec FastAPI et Uvicorn, intégration du SDK officiel OpenAI, validation rigoureuse des requêtes et exposition de routes d'inférence modulaires avec gestion d'environnement (.env).",
      impact: "Mise en place d'un pipeline complet reliant le modèle de langage au client web, posant les bases solides d'une pratique d'AI Engineering moderne.",
      results: "[Ajouter résultat]",
      technologies: ["Python", "FastAPI", "Uvicorn", "OpenAI API", "OpenAI SDK", "python-dotenv", "REST API"],
      githubUrl: "[Ajouter lien GitHub]",
      demoUrl: "[Ajouter lien démo]",
      architecture: "Client Web ──(HTTP JSON)──► FastAPI Backend (Uvicorn) ──(Async Auth)──► OpenAI API (GPT)",
      codeSnippet: `# Exemple de structure d'endpoint d'inférence avec FastAPI & OpenAI
from fastapi import FastAPI, HTTPException
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
app = FastAPI(title="AI Assistant API")

@app.post("/api/chat")
async def chat_completion(prompt: str):
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}]
        )
        return {"reply": response.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))`
    },

    {
      id: "protein-sequence-classification",
      title: "Classification de Fonctions de Protéines & Séquences Biologiques",
      category: "BioAI & Machine Learning",
      badge: "BioAI · ML/DL",
      subtitle: "Détection de régions codantes et non codantes dans les séquences d'ADN",
      description: "Projet de Machine Learning et Deep Learning appliqué à la bio-informatique génomique. L'objectif est de classifier des séquences d'ADN afin de distinguer les régions codantes des régions non codantes grâce à des représentations vectorielles adaptées.",
      problem: "Les séquences biologiques brutes (A, C, G, T) sont textuelles, variables en longueur et non structurées. Il faut les convertir en tenseurs numériques riches tout en préservant le contexte local des motifs nucléotidiques.",
      solution: "Mise en œuvre de représentations par décomposition en k-mers et One-Hot Encoding, suivie de l'entraînement comparatif d'algorithmes de Machine Learning et d'une architecture de Deep Learning basée sur des convolutions 1D (CNN 1D).",
      impact: "Démonstration concrète d'une synergie pluridisciplinaire réussie entre Biologie, Mathématiques, Data Science et Intelligence Artificielle.",
      results: "[Ajouter résultat]",
      technologies: ["Python", "Machine Learning", "Deep Learning", "CNN 1D", "k-mers", "One-Hot Encoding", "Pandas", "NumPy"],
      githubUrl: "[Ajouter lien GitHub]",
      demoUrl: "[Ajouter lien démo]",
      architecture: "Séquence ADN (A,C,G,T) ──► Tokenisation k-mers & One-Hot ──► CNN 1D / Classifieur ML ──► Prédiction (Codant / Non-Codant)",
      codeSnippet: `# Prétraitement et décomposition de séquences en k-mers
def build_kmers(sequence: str, k: int = 6) -> list[str]:
    """Génère la liste des k-mers glissants pour une séquence d'ADN."""
    sequence = sequence.upper().strip()
    return [sequence[i:i + k] for i in range(len(sequence) - k + 1)]

# Exemple : 'ATGCGT' avec k=3 -> ['ATG', 'TGC', 'GCG', 'CGT']`
    },

    {
      id: "knowledge-distillation",
      title: "Knowledge Distillation / Modèle Étudiant en Génomique",
      category: "Deep Learning & Optimisation",
      badge: "Deep Learning Avancé",
      subtitle: "Compression et transfert de connaissances pour la classification génomique",
      description: "Exploration des techniques avancées de Knowledge Distillation (distillation de connaissances) pour la modélisation génomique. Le projet consiste à entraîner un modèle étudiant léger (MLP) capable de reproduire la précision d'un modèle enseignant volumineux.",
      problem: "Les modèles d'IA complexes produisant des embeddings riches requièrent des ressources de calcul massives, difficiles à déployer efficacement sur des environnements contraints.",
      solution: "Conception d'un cadre d'apprentissage Teacher-Student : extraction d'embeddings complexes, transfert vers un modèle étudiant (MLP) par optimisation conjointe de la Binary Cross Entropy (BCE) et de la Cosine Similarity avec ajustement fin de la température de distillation.",
      impact: "Maintien d'un niveau prédictif élevé tout en réduisant considérablement la complexité paramétrique et l'empreinte mémoire du modèle déployé.",
      results: "[Ajouter résultat]",
      technologies: ["Knowledge Distillation", "Modèle Enseignant / Étudiant", "MLP", "Embeddings", "k-mers", "Binary Cross Entropy", "Cosine Similarity", "Température", "Python"],
      githubUrl: "[Ajouter lien GitHub]",
      demoUrl: "[Ajouter lien démo]",
      architecture: "Teacher Model (Embeddings Riches) ──(Soft Labels + Température T)──► Loss Mixte (BCE + Cosine Sim) ◄── Student Model (MLP Léger)",
      codeSnippet: `# Formulation de la perte de distillation combinée
import torch
import torch.nn as nn
import torch.nn.functional as F

class DistillationLoss(nn.Module):
    def __init__(self, temperature: float = 3.0, alpha: float = 0.5):
        super().__init__()
        self.temp = temperature
        self.alpha = alpha
        self.bce = nn.BCEWithLogitsLoss()
        self.cosine = nn.CosineSimilarity(dim=-1)

    def forward(self, student_logits, teacher_logits, student_emb, teacher_emb, targets):
        # Perte supervisée standard (vérité terrain)
        hard_loss = self.bce(student_logits, targets)
        # Perte d'alignement des représentations vectorielles
        soft_loss = 1.0 - self.cosine(student_emb, teacher_emb).mean()
        return self.alpha * hard_loss + (1 - self.alpha) * soft_loss`
    },

    {
      id: "ml-challenge",
      title: "Challenge Machine Learning — Classification Protéique",
      category: "Compétition & Challenge Data",
      badge: "Challenge ML",
      subtitle: "Résolution compétitive, feature engineering et benchmark de modèles prédictifs",
      description: "Participation à un challenge de Machine Learning axé sur la classification de fonctions protéiques à partir de séquences biologiques. Mise en application méthodique du workflow complet de la science des données sous contraintes de performance.",
      problem: "Exploiter un jeu de données complexe, hétérogène et bruité pour prédire des fonctions protéiques avec une rigueur statistique maximale et un risque minimal de surapprentissage.",
      solution: "Cycle complet d'ingénierie des données : exploration descriptive approfondie (EDA), preprocessing, ingénierie de caractéristiques (feature engineering), protocole de validation croisée rigoureux, benchmark de multiples modèles et optimisation itérative.",
      impact: "Preuve concrète de réactivité, d'agilité méthodologique et d'efficacité à résoudre un problème data concret dans un temps imparti.",
      results: "[Ajouter résultat]",
      technologies: ["Data Exploration", "Preprocessing", "Feature Engineering", "Modélisation ML", "Cross-Validation", "Benchmark", "Python", "Scikit-Learn"],
      githubUrl: "[Ajouter lien GitHub]",
      demoUrl: "[Ajouter lien démo]",
      architecture: "Dataset Brut ──► EDA & Nettoyage ──► Feature Engineering ──► K-Fold Cross-Validation ──► Benchmark & Sélection",
      codeSnippet: `# Protocole de validation croisée systématique et benchmark
from sklearn.model_selection import StratifiedKFold, cross_val_score
import numpy as np

def evaluate_models(models: dict, X, y, cv_folds: int = 5):
    """Évalue et compare méthodiquement un ensemble de modèles ML."""
    results = {}
    skf = StratifiedKFold(n_splits=cv_folds, shuffle=True, random_state=42)
    for name, model in models.items():
        scores = cross_val_score(model, X, y, cv=skf, scoring='f1_weighted')
        results[name] = {"mean": np.mean(scores), "std": np.std(scores)}
    return results`
    }
  ],

  skills: {
    categories: [
      {
        id: "programming",
        title: "Programming & Code",
        icon: "code",
        description: "Langages de programmation fondamentaux pour l'ingénierie et la science des données.",
        skills: [
          { name: "Python", highlight: true, note: "Langage principal (Data Science, Algorithmes, Backend & IA)" }
        ]
      },
      {
        id: "data-science",
        title: "Data Science & Machine Learning",
        icon: "brain",
        description: "Analyse, manipulation des données, modélisation statistique et apprentissage automatique.",
        skills: [
          { name: "Data Analysis", highlight: true },
          { name: "Data Processing", highlight: true },
          { name: "Pandas", highlight: true },
          { name: "NumPy", highlight: true },
          { name: "Data Visualization", highlight: true },
          { name: "Machine Learning", highlight: true }
        ]
      },
      {
        id: "automation",
        title: "Automation & Integration",
        icon: "zap",
        description: "Automatisation de processus et connexion de services d'intelligence artificielle.",
        skills: [
          { name: "Automation", highlight: true },
          { name: "API Integration", highlight: true }
        ]
      },
      {
        id: "productivity",
        title: "Productivity & Data Tools",
        icon: "database",
        description: "Outils de bureautique avancée, d'organisation et d'analyse tabulaire rapide.",
        skills: [
          { name: "Microsoft Excel", highlight: false, note: "Analyse rapide, structuration de données et tableaux" }
        ]
      }
    ]
  },

  aiJourney: [
    {
      step: "01",
      title: "Python & Fondations Algorithmiques",
      status: "Acquis",
      description: "Maîtrise de la syntaxe, des structures de données fondamentales, de la modularité du code et de la programmation orientée objet."
    },
    {
      step: "02",
      title: "Data Analysis & Traitement",
      status: "Acquis",
      description: "Manipulation rigoureuse de jeux de données, nettoyage, analyse exploratoire et visualisation avec Pandas, NumPy et outils d'analyse."
    },
    {
      step: "03",
      title: "Machine Learning & Modélisation",
      status: "En action",
      description: "Algorithmes supervisés et non-supervisés, feature engineering, métriques de performance et participation à des challenges compétitifs."
    },
    {
      step: "04",
      title: "Deep Learning & Représentations",
      status: "En action",
      description: "Réseaux neuronaux convolutifs (CNN 1D), décomposition k-mers pour séquences biologiques et transfert de connaissances (Distillation)."
    },
    {
      step: "05",
      title: "Generative AI & API LLM",
      status: "En action",
      description: "Exploitation de grands modèles de langage, ingénierie de prompts et intégration programmatique de l'API OpenAI dans des applications."
    },
    {
      step: "06",
      title: "AI Engineering & Production",
      status: "Objectif & Vision",
      description: "Développement d'APIs performantes avec FastAPI, déploiement conteneurisé, surveillance de modèles et solutions complètes orientées impact."
    }
  ],

  gallery: [
    {
      id: "event-challenge-1",
      category: "Challenges",
      title: "Challenge Machine Learning — Séquences Biologiques",
      date: "[Ajouter date]",
      image: "assets/images/challenges.jpeg",
      description: "Compétition de modélisation prédictive portant sur la classification de séquences d'ADN et de protéines.",
      badge: "Machine Learning",
      icon: "trophy"
    },
    {
      id: "event-formation-1",
      category: "Formations",
      title: "Cursus Ingénieur Génie Mathématique & Modélisation",
      date: "[Ajouter date]",
      image: "assets/images/Formations.jpg",
      description: "Sessions d'ingénierie mathématique, travaux pratiques de modélisation numérique et calcul scientifique à l'ENSGMM.",
      badge: "ENSGMM · UNSTIM",
      icon: "book"
    },
    {
      id: "event-ai-1",
      category: "AI & Data",
      title: "Développement du Chatbot FastAPI & OpenAI",
      date: "[Ajouter date]",
      image: "assets/images/IA_&_Data.png",
      description: "Conception, tests d'API et architecture logicielle d'une solution d'assistance intelligente avec FastAPI.",
      badge: "AI Engineering",
      icon: "cpu"
    },
    {
      id: "event-communaute-1",
      category: "Events",
      title: "Événements & Ateliers Technologiques",
      date: "[Ajouter date]",
      image: "assets/images/Events.jpg",
      description: "Participation à des rencontres techniques, ateliers communautaires et partage de connaissances autour de la tech et de la Data.",
      badge: "Networking & Tech",
      icon: "users"
    }
  ],

  githubShowcase: {
    title: "Code, projets & expériences",
    description: "Je documente progressivement mes projets, mes expérimentations et mon apprentissage à travers mes dépôts GitHub.",
    profileUrl: "[Ajouter lien GitHub]",
    buttonLabel: "Voir mon GitHub",
    featuredRepos: [
      {
        name: "gpt-fastapi-assistant",
        description: "Application web backend avec FastAPI intégrant l'API GPT d'OpenAI pour l'inférence conversationnelle.",
        language: "Python",
        stars: "★ [Ajouter]",
        url: "[Ajouter lien GitHub]"
      },
      {
        name: "dna-protein-classifier",
        description: "Classification de régions codantes et non codantes dans l'ADN par k-mers et CNN 1D.",
        language: "Python",
        stars: "★ [Ajouter]",
        url: "[Ajouter lien GitHub]"
      },
      {
        name: "genomic-knowledge-distillation",
        description: "Pipeline de distillation de connaissances Teacher-Student pour modèles génomiques compacts.",
        language: "Python",
        stars: "★ [Ajouter]",
        url: "[Ajouter lien GitHub]"
      }
    ]
  },

  contact: {
    title: "Travaillons ensemble",
    subtitle: "Ouvert aux opportunités junior, stages, projets Data/IA et collaborations techniques.",
    introText: "Étudiant ingénieur passionné, rigoureux et orienté résultats, je suis à la recherche de nouvelles opportunités pour mettre mes compétences en mathématiques, modélisation et IA au service de projets ambitieux.",
    opportunities: [
      "Stages en Data Science & Machine Learning",
      "Opportunités junior en AI Engineering",
      "Collaborations sur des projets Data / Modélisation",
      "Participation à des challenges techniques et hackathons"
    ],
    details: {
      email: "[Ajouter email]",
      github: "[Ajouter lien GitHub]",
      linkedin: "[Ajouter lien LinkedIn]",
      location: "ENSGMM — UNSTIM, Abomey / Cotonou, Bénin"
    }
  }
};

// Export pour module ES ou inclusion globale dans le navigateur
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
