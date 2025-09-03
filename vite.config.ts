import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import {COMMIT_HASH} from "./getCommitHash";
import path from "path";
import fs from "fs-extra";

const codeServerOut = path.resolve("node_modules/code-server/lib/vscode/out/vs");
const publicVs = path.resolve(`public/stable-${COMMIT_HASH}/static/out/vs`);
fs.removeSync(publicVs);
fs.copySync(codeServerOut, publicVs);
export default defineConfig({
  base: `/${COMMIT_HASH}/out/`,
  plugins: [],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      }
    }
  },
})
