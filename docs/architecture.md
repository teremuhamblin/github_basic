###### architecture.md >> markdown 
# 🧱 Architecture
- Projet — github_basic

Ce projet est volontairement simple : son objectif principal est de servir de terrain d’entraînement à Git et GitHub.

---

### 1. Vue d’ensemble
```md
- **`src/`** : contient le code source minimal (ex. `app.py`).
- **`docs/`** : contient la documentation, les notes Git, la roadmap, l’architecture.
- **`.gitignore`** : définit les fichiers à exclure du suivi Git.
- **`LICENSE`** : licence MIT du projet.
- **`CHANGELOG.md`** : historique des versions et des changements.
```

---

### 2. Dossier `src/`
- **Objectif :** fournir un code simple à modifier pour générer des commits.
- Exemple actuel :
  - `src/app.py` : script minimal avec un `main()` et un `print()`.

>Idées d’évolution :
```python
- Ajouter d’autres fichiers (`utils.py`, `calculator.py`, etc.).
- Créer des fonctions faciles à tester.
- Introduire des changements progressifs pour pratiquer les branches et merges.
```

---

### 3. Dossier `docs/`
```docs
- **`docs/git_notes.md`** : mémo des commandes Git essentielles.
- **`docs/ROADMAP.md`** : plan d’évolution du projet.
- **`docs/ARCHITECTURE.md`** : ce document, décrivant la structure globale.
```

>Ce dossier peut aussi accueillir :
- Des tutoriels pas à pas.
- Des exemples de workflows Git (Gitflow, trunk-based, etc.).
- Des captures d’écran de l’interface GitHub.

---

### 4. Flux de travail Git suggéré
- 1. **Créer une branche** pour chaque expérimentation :
   - `feature/ajout-message`
   - `feature/refactor-app`
- 2. **Commits fréquents**, messages clairs :
   - `git commit -m "feat: ajoute un message de bienvenue"`
- 3. **Pull request** (même en solo) pour s’habituer au process.
- 4. **Merge** via GitHub, puis suppression de la branche.

---

### 5. Philosophie du projet
```project
- Minimaliste, mais structuré comme un “vrai” dépôt.
- Favorise la pratique plutôt que la théorie.
- Encourage les essais, erreurs, corrections, rebase, revert, etc.
```

>Ce projet n’est pas fait pour être “parfait”, mais pour être **manipulé**.

>Mise a jour majeure
- github_basic

## 🎯 Objectif
Mise à jour de la structure interne du projet
## 🗂️ Structure
- `src/` — Code source
- `docs/` — Documentation
- `.github/` — Workflows CI/CD
- `history/` — Changelog + Roadmap
- `scripts/` — Scripts Node utilitaires

## 🔧 Principes
- Simplicité
- Lisibilité
- Évolutivité
