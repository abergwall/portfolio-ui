import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        exports: "auto",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled, css",
        },
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        exports: "auto",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    ],
    external: ["react", "react-dom", "styled-components"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      image(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: ["react", "react-dom", "styled-components"],
  },
];
