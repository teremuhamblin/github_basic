###### ROADMAP.md >> markdown 
# 🗺️ github_basic
- Ce document décrit les étapes d’évolution prévues pour le projet pédagogique `github_basic`.
>Évolution progressive du projet pédagogique Git/GitHub.

### 🟦 v0.1.0 — Initialisation du projet
### ✔️ Terminé
- [x] Structure du projet (`src/`, `docs/`, `.gitignore`, `LICENSE`)
- [x] Ajout du fichier `CHANGELOG.md`
- [x] Premier code minimal (`src/app.py`)
- [x] Notes Git de base (`docs/git_notes.md`)
- [x] README.md initial
- [x] Commit initial + tag v0.1.0

---

### 🟩 v0.2.0 — Documentation & Améliorations
### ✔️ Terminé
- [x] Ajout documentation avancée (`docs/git_advanced.md`)
- [x] Ajout guide d’utilisation (`docs/usage.md`)
- [x] Amélioration du code Python
- [x] Ajout d’un script d’exemple (`src/examples/demo.py`)
- [x] Mise à jour du README.md
- [x] Ajout workflow GitHub Action (`basic.yml`)
- [x] Mise à jour du CHANGELOG.md
- [x] Tag v0.2.0

---

### 🟧 v0.3.0 — Structuration avancée & Qualité du code
### 🔄 À faire
- [ ] Ajouter un linter Python (flake8 ou ruff)
- [ ] Ajouter un formateur automatique (black)
- [ ] Ajouter un fichier `CONTRIBUTING.md`
- [ ] Ajouter un fichier `CODE_OF_CONDUCT.md`
- [ ] Ajouter un dossier `tests/` avec premiers tests unitaires
- [ ] Mettre à jour le workflow GitHub Action pour inclure :
  - [ ] Lint
  - [ ] Format
  - [ ] Tests
- [ ] Mettre à jour le README.md (badges CI)
- [ ] Tag v0.3.0

---

### 🟨 v0.4.0 — Documentation Pro & Amélioration UX
### 🔄 À faire
- [ ] Ajouter une documentation complète dans `/docs/` :
  - [ ] Architecture du projet
  - [ ] Tutoriel Git complet (débutant → avancé)
  - [ ] Guide workflow GitHub
- [ ] Ajouter un logo simple pour le projet
- [ ] Ajouter un header + footer pro dans le README.md
- [ ] Ajouter des badges personnalisés (version, CI, licence, structure)
- [ ] Ajouter un script Python interactif (menu CLI)
- [ ] Améliorer la structure des exemples (`src/examples/`)
- [ ] Tag v0.4.0

---

### 🟪 v0.5.0 — Version pédagogique complète & Automatisation
### 🔄 À faire
- [ ] Ajouter un tutoriel complet Git/GitHub en plusieurs modules :
  - [ ] Bases
  - [ ] Branches
  - [ ] Pull Requests
  - [ ] Issues & Milestones
  - [ ] CI/CD
- [ ] Ajouter un workflow GitHub Action avancé :
  - [ ] Release automatique
  - [ ] Génération automatique du CHANGELOG
  - [ ] Vérification de structure du repo
- [ ] Ajouter un script Python pour générer automatiquement :
  - [ ] Issues
  - [ ] Milestones
  - [ ] Releases
- [ ] Ajouter un fichier `ROADMAP.md` dynamique (auto‑mise à jour)
- [ ] Ajouter un tableau de bord Markdown dans `/docs/overview.md`
- [ ] Tag v0.5.0

---

### 🔜 Prochaines versions (v0.6.0 → v1.0.0)
- Automatisation complète du projet
- Génération de documentation HTML
- Ajout d’un site GitHub Pages
- Ajout d’un module pédagogique interactif

---

### ✅ Phase 1 — Base du dépôt

- [x] Créer la structure minimale du projet (`src/`, `docs/`, `.gitignore`, `LICENSE`, `CHANGELOG.md`).
- [x] Ajouter un script simple dans `src/app.py`.
- [x] Rédiger un mémo Git dans `docs/git_notes.md`.

---

### 🚧 Phase 2 — Pratique Git

- [ ] Créer plusieurs branches de test (`feature/`, `bugfix/`, etc.).
- [ ] Simuler des conflits de merge et les résoudre.
- [ ] Utiliser des tags pour marquer des versions (`v0.1.0`, `v0.2.0`, etc.).
- [ ] Expérimenter les revert (`git revert`) et reset (`git reset`).

---

### 🔁 Phase 3 — Intégration continue

- [x] Ajouter un workflow GitHub Actions de base (`.github/workflows/ci.yml`).
- [ ] Ajouter des tests unitaires simples dans `src/`.
- [ ] Faire échouer volontairement la CI pour comprendre les logs.
- [ ] Corriger les erreurs et vérifier le passage au vert.

---

### 🚀 Phase 4 — Améliorations

- [ ] Ajouter une meilleure structure de code dans `src/`.
- [ ] Documenter plus en détail les commandes Git avancées.
- [ ] Ajouter des exemples de bonnes pratiques de messages de commit.
- [ ] Préparer un guide “Onboarding Git” pour un nouveau développeur.
