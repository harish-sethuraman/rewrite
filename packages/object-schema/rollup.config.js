import copy from "rollup-plugin-copy";

export default {
	input: 'src/index.js',
	output: [
		{
			file: 'dist/cjs/index.cjs',
			format: 'cjs'
		},
		{
			file: 'dist/esm/index.js',
			format: 'esm'
		}
	],
	plugins: [
		copy({
			targets: [
				{ src: 'src/types.ts', dest: 'dist/cjs' },
				{ src: 'src/types.ts', dest: 'dist/esm' }
			]
		})
	]
};
