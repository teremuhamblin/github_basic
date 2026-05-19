# 🛡️ Security Advisory  
> Projet : github_basic  
> Identifiant : GHSA-XXXX-XXXX-XXXX  
> Gravité : ⚠️ Modérée  
> Statut : Résolu  
> Date de publication : 2026-05-19  
> Dernière mise à jour : 2026-05-19  

---

## 📌 Résumé
Une vulnérabilité a été identifiée dans le projet **github_basic**, pouvant permettre une mauvaise configuration ou une exécution non sécurisée de scripts dans certains environnements.  
Cette faille ne concerne pas les utilisateurs finaux, mais peut impacter les développeurs utilisant les scripts internes du projet.

---

## 🔍 Détails de la vulnérabilité
- **Type de vulnérabilité :** Mauvaise configuration / Exécution non sécurisée  
- **Composant affecté :** Scripts internes (`scripts/`)  
- **Impact potentiel :**
  - Exécution non contrôlée de commandes
  - Risque d’injection si les scripts sont modifiés ou mal utilisés
  - Mauvaise isolation des environnements de test

Aucun exploit connu n’a été observé.

---

## 🎯 Versions affectées
- ❌ v0.1.0  
- ❌ v0.2.0  
- ❌ v0.3.0  
- ✔️ **Corrigé en v0.4.0**

---

## 🛠️ Correctifs appliqués (v0.4.0)
- [x] Ajout de workflows GitHub Actions sécurisés  
- [x] Validation des scripts et ajout de protections (`set -e`, vérifications)  
- [x] Réorganisation du dossier `scripts/`  
- [x] Documentation mise à jour pour les bonnes pratiques  
- [x] Ajout d’un SECURITY.md plus strict  

---

## 🧪 Mesures de mitigation recommandées
Même si la faille est corrigée en v0.4.0, il est recommandé de :

- [x] Mettre à jour vers **v0.4.0 ou supérieur**  
- [x] Ne jamais exécuter un script sans l’avoir lu  
- [x] Utiliser un environnement isolé (venv, nvm, conteneur)  
- [x] Vérifier les permissions des fichiers exécutables  

---

## 📞 Contact sécurité
Pour signaler une vulnérabilité :

- Ne pas ouvrir d’issue publique  
- Contacter le mainteneur : **@Teremu**  
- Fournir :
  - Description claire  
  - Étapes de reproduction  
  - Impact potentiel  
  - Correctif proposé (si possible)

---

## 📄 Statut
- **Vulnérabilité corrigée** ✔️  
- **Aucune action supplémentaire requise**
