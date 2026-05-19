import fs from "fs";

console.log("🔍 Vérification des fichiers docs...");

const required = [
  "docs/git_notes.md",
  "docs/git_advanced.md",
  "docs/usage.md",
  "docs/architecture.md",
  "docs/workflow_github.md",
  "docs/tutorial_git.md"
];

required.forEach((file) => {
  if (!fs.existsSync(file)) {
    console.log(`❌ Manquant : ${file}`);
  } else {
    console.log(`✔️ OK : ${file}`);
  }
});
