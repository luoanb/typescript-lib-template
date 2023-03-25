import { defineConfig } from "rollup";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import { nodeResolve as resolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import esbuild from "rollup-plugin-esbuild";

// import { name } from "./package.json";
const name = "yibao";
export default defineConfig([
  // 后续不需要打印了
  // {
  //   input: "./node_modules/xml-js/index.js",
  //   plugins: [
  //     resolve({
  //       extensions: [".tsx", ".ts", ".js"]
  //     }),
  //     commonjs(),
  //     esbuild({
  //       target: ["chrome58", "ie8"]
  //     })
  //   ],
  //   output: [
  //     {
  //       name: "xmlJs",
  //       file: "./dist/xmlJs.js",
  //       format: "umd"
  //     }
  //   ]
  // },
  {
    input: "./src/main.ts",
    plugins: [typescript()],
    output: [
      {
        name,
        file: "./dist/index.mjs",
        format: "es"
      },
      {
        name,
        file: "./dist/index.cjs",
        format: "commonjs"
      }
    ]
  },
  {
    input: "./src/main.ts",
    plugins: [dts()],
    output: [
      {
        name,
        file: "./dist/index.d.ts",
        format: "commonjs"
      }
    ]
  },
  {
    input: "./src/main.ts",
    plugins: [
      typescript(),
      commonjs(),
      json(),
      // resolve({
      //   extensions: [".tsx", ".ts", ".js"]
      // }),
      babel({
        presets: [
          [
            "@babel/preset-env",
            {
              useBuiltIns: "entry"
            }
          ],
        ],
        targets: {
          chrome: "58",
          ie: "8"
        }
      })
    ],
    output: [
      {
        name,
        file: "./dist/main_umd.js",
        format: "umd"
      }
    ]
  }
]);
