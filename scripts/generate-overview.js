import fs from "fs";

const content = `
# 📊 Overview généré automatiquement

Projet : github_basic  
Version : 0.4.0  
Généré le : ${new Date().toLocaleString()}

## 📁 Structure
${fs.readdirSync(".").join("\n")}
`;

fs.writeFileSync("overview.md", content);
console.log("✔️ overview.md généré");
