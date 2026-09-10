# Portfolio Professionnel — Richenel D. OUSSOUKPEVI
> **Élève ingénieur en Génie Mathématique & Modélisation (ENSGMM — UNSTIM)**
> **Data Science · Machine Learning · AI Engineering**

Bienvenue dans le dépôt du portfolio personnel de **Richenel D. OUSSOUKPEVI**.

Ce portfolio a été conçu pour offrir une vitrine moderne, épurée, technologique et percutante destinée aux recruteurs, équipes Data/AI, entreprises technologiques et laboratoires de recherche.

---

## 🚀 Fonctionnalités Clés

1. **Direction Artistique Scientifique & Tech** :
   - Thème sombre moderne par défaut avec possibilité de basculer en thème clair (avec persistance `localStorage`).
   - Animation de fond sur `<canvas>` interactive représentant un réseau neuronal et des points de données interconnectés.
   - Textures de grilles scientifiques discrètes et cartes en glassmorphism.
2. **Architecture Données / Vues découplée** :
   - L'ensemble des informations (projets, compétences, cursus, galerie, parcours IA, coordonnées) est centralisé dans le fichier modulaire [`js/data.js`](file:///c:/projet_scientifique/portfolio/portfolio2/js/data.js).
   - Vous pouvez facilement mettre à jour un lien, modifier un projet ou ajouter un événement sans toucher à une seule ligne de code HTML.
3. **4 Projets Phares Documentés** :
   - **Application & Chatbot IA avec API GPT** (FastAPI, Uvicorn, OpenAI API, python-dotenv, REST API)
   - **Classification de Fonctions de Protéines** (BioAI, CNN 1D, k-mers, One-Hot Encoding)
   - **Knowledge Distillation / Modèle Étudiant** (Distillation de connaissances en génomique, MLP, BCE, Cosine Similarity)
   - **Challenge Machine Learning** (Séquences biologiques, feature engineering, benchmark sous contraintes)
   - Chaque projet dispose d'une modale interactive affichant le problème, la solution, le schéma d'architecture et un extrait de code.
4. **Sections Dédiées Recruteur** :
   - **À propos de moi** mettant en avant votre rigueur mathématique et votre philosophie *"Apprendre en construisant"*.
   - **Mon Cursus** avec une timeline de formation à l'ENSGMM.
   - **Compétences Techniques** avec des badges réels sans notations arbitraires.
   - **Galerie d'événements** avec filtrage instantané par catégorie (Challenges, Formations, AI & Data, Events).
   - **Mon Parcours dans l'IA** décrivant votre progression étape par étape.
   - **Code & Dépôts GitHub** avec aperçus des dépôts.
   - **Section Contact** avec formulaire interactif et bouton de copie de l'adresse email en un clic avec notification Toast.

---

## 🛠️ Comment Tester & Visualiser en Local

Vous pouvez lancer le portfolio instantanément avec Python :

```powershell
cd c:\projet_scientifique\portfolio\portfolio2
python -m http.server 8085
```

Puis ouvrez votre navigateur favori sur :
👉 [http://localhost:8085](http://localhost:8085)

Ou bien ouvrez directement le fichier [index.html](file:///c:/projet_scientifique/portfolio/portfolio2/index.html) dans votre navigateur.

---

## 📝 Comment Personnaliser Vos Données

Toutes vos données sont stockées dans [`js/data.js`](file:///c:/projet_scientifique/portfolio/portfolio2/js/data.js) :

1. **Vos liens et coordonnées** :
   - Remplacez `[Ajouter lien GitHub]` par l'URL de votre profil GitHub (ex. `https://github.com/votre-pseudo`).
   - Remplacez `[Ajouter lien LinkedIn]` par votre profil LinkedIn.
   - Remplacez `[Ajouter email]` par votre adresse email réelle.
2. **Vos résultats de projets** :
   - Dans chaque objet de projet, remplacez `[Ajouter résultat]` par vos métriques exactes dès qu'elles sont disponibles (ex. `Accuracy 94.2%`, `F1-Score 0.91`, etc.).
3. **Vos photos de la galerie** :
   - Placez vos photos dans le dossier `assets/images/`.
   - Modifiez le champ `imagePlaceholder` dans [`js/data.js`](file:///c:/projet_scientifique/portfolio/portfolio2/js/data.js) pour pointer vers vos images.

---

## 🌐 Déploiement Gratuit sur GitHub Pages (1 minute)

Comme ce site ne nécessite aucun outil de build ou dépendance externe :

1. Créez un dépôt GitHub nommé `votre-pseudo.github.io` ou `portfolio`.
2. Poussez le contenu du dossier `portfolio2` :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio Richenel D. OUSSOUKPEVI"
   git branch -M main
   git remote add origin https://github.com/votre-pseudo/votre-repo.git
   git push -u origin main
   ```
3. Rendez-vous dans les **Settings** de votre dépôt GitHub > **Pages** > sélectionnez la branche `main` et enregistrez.
4. Votre portfolio sera immédiatement en ligne à l'adresse `https://votre-pseudo.github.io/` !
