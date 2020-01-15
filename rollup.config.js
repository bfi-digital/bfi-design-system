import resolve from "@rollup/plugin-node-resolve"
import babel from "rollup-plugin-babel"
import images from "@rollup/plugin-image"
import autoExternal from "rollup-plugin-auto-external"
import peerDepsExternal from "rollup-plugin-peer-deps-external"

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
			extensions: [
				".js", 
				".jsx"
			]
		}),
		images(),
		babel({
			exclude: "node_modules/**"
		}),
	],
}