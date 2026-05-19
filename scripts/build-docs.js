import fs from "fs-extra";
import { marked } from "marked";

const docs = ["docs/git_notes.md", "docs/git_advanced.md", "docs/usage.md"];

console.log("📘 Construction de la documentation...");

docs.forEach((file) => {
  const md = fs.readFileSync(file, "utf8");
  const html = marked(md);
  const out = file.replace(".md", ".html");

  fs.writeFileSync(out, html);
  console.log(`✔️ ${out} généré`);
});
