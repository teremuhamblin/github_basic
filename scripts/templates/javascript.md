###### javascript.md >> markdown 
# 📘 Template recommandé 
- JAVASCRIPT
>Pour créer un nouveau script Javascript :
```md
```javascript
!/usr/bin/env node

// ==========================================
// Script : xxxxx
// Description : Décrire la fonction du script
// Auteur : xxxxx
// Projet : github_basic
// ==========================================

console.log("Démarrage du script...");

// Code ici

function main() {
  console.log("Exécution du script JavaScript");
}

try {
  main();
} catch (error) {
  console.error("Erreur :", error.message);
  process.exit(1);
}
```
