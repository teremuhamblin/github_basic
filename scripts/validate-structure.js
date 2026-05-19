import fs from "fs";

const required = ["src", "docs", ".github", "history"];

console.log("🧩 Validation de la structure du projet...");

required.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    console.log(`❌ Dossier manquant : ${dir}`);
  } else {
    console.log(`✔️ ${dir}`);
  }
});
