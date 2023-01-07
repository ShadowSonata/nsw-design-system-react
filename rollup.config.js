import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { uglify } from "rollup-plugin-uglify";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "es",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript({
      tsconfigOverride: {
        exclude: ["**/__tests__", "**/*.test.ts", "src/stories/*"],
      },
    }),
    postcss({
      extensions: [".css"],
    }),
    uglify(),
    babel({ babelHelpers: "bundled" }),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: "auto", // <---- this solves default issue
    }),
  ],
};
