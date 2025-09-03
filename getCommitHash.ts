import fs from "fs";
import path from "path";

const productJsonPath = path.resolve("node_modules/code-server/lib/vscode/product.json");
const product = JSON.parse(fs.readFileSync(productJsonPath, "utf-8"));

export const COMMIT_HASH = product.commit;
console.log("Code-server commit hash:", COMMIT_HASH);
