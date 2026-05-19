###### README.md >> markdown 
# 📁 scripts/
- Scripts utilitaires du projet github_basic

Ce dossier contient l’ensemble des scripts utilitaires utilisés pour automatiser, faciliter ou standardiser certaines actions dans le projet github_basic.

>Les scripts ont pour objectif de :
```md
- Simplifier les tâches répétitives  
- Améliorer la productivité  
- Garantir une cohérence dans les opérations du projet  
- Offrir des outils pédagogiques pour apprendre Git, GitHub et l’organisation d’un projet
```

---

### 🧩 Contenu du dossier
>Selon l’évolution du projet, ce dossier peut contenir :
```md
- Script JavaScript (.js) : script principal du projet

- Scripts Bash (.sh)  
  Automatisation simple : installation, nettoyage, génération de fichiers, etc.

- Scripts Python (.py)  
  Exemples pédagogiques, outils internes, mini‑automatisations.

- Templates de scripts 
  Modèles prêts à l’emploi pour créer de nouveaux scripts cohérents.
```

>Exemple de structure :
```text
scripts/
├─ README.md
├─ .gitkeep 
├─ bash .sh
└─ python .py
├─ generate-overview.js    
├─ validate-structure.js
└─ build-docs.js
└─ check-docs.js
```

---

### 🚀 Utilisation
>Exécuter un script Bash
```bash
chmod +x scripts/mon_script.sh
./scripts/mon_script.sh
```

>Exécuter un script JavaScript
```js
chmod +x scripts/mon_script.js
./scripts/mon_script.js
```

>Exécuter un script Python
```bash
python3 scripts/mon_script.py
```

---

### 🛠️ Bonnes pratiques
>Pour maintenir une qualité homogène :
```md
- Toujours ajouter un header dans chaque script  
- Documenter les paramètres, pré‑requis et sorties  
- Utiliser des noms explicites  
- Tester les scripts avant de les pousser  
- Respecter la structure du dossier
```

---

### 📘 Template recommandé
>Pour créer un nouveau script Bash :
```bash
!/bin/bash

==========================================

Script : NOMDUSCRIPT

Description : Décrire la fonction du script

Auteur : Teremu

Projet : github_basic

==========================================

set -e

echo "Démarrage du script..."

Code ici
```

---

### 🎯 Objectif du dossier
Le dossier scripts/ sert de boîte à outils technique pour le projet.  
Il accompagne l’apprentissage des bonnes pratiques Git/GitHub tout en fournissant des automatisations utiles et réutilisables.

---
