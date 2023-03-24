import { defineConfig } from "rollup";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";

// import { name } from "./package.json";
const name = "yibao";
export default defineConfig([
  {
    input: "./src/main.ts",
    plugins: [typescript(), dts()],
    output: [
      {
        name,
        file: "./dist/main_umd.js",
        format: "umd"
      },
      {
        name,
        file: "./dist/index.mjs",
        format: "es"
      },
      {
        name,
        file: "./dist/index.cjs",
        format: "commonjs"
      },
      {
        name,
        file: "./dist/index.d.ts",
        format: "commonjs"
      }
    ]
  }
]);
