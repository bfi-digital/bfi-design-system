import resolve from "@rollup/plugin-node-resolve"
import babel from "rollup-plugin-babel"
import images from "@rollup/plugin-image"
import autoExternal from "rollup-plugin-auto-external"
import peerDepsExternal from "rollup-plugin-peer-deps-external"

const extensions = [
    ".js", 
    ".jsx",
    ".ts",
    ".tsx"
]

export default {
    input: "src/index.ts",
    output: {
        file: "dist/bundle.js",
        format: "cjs",
        globals: { "styled-components": "styled" }
    },
    plugins: [
        peerDepsExternal(),
        autoExternal(),
        resolve({
            extensions: extensions
        }),
        images(),
        babel({
            extensions: extensions,
            exclude: "node_modules/**"
        }),
    ],
}