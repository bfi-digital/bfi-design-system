import resolve from "@rollup/plugin-node-resolve"
import babel from "rollup-plugin-babel"
import url from "@rollup/plugin-url"
import autoExternal from "rollup-plugin-auto-external"
import peerDepsExternal from "rollup-plugin-peer-deps-external"

const extensions = [
    ".js", 
    ".jsx",
    ".ts",
    ".tsx"
]

export default {
    input: "src/index.js",
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
        url(),
        babel({
            extensions: extensions,
            exclude: "node_modules/**"
        }),
    ],
}