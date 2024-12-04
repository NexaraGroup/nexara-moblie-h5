/**
 * @file
 * !!!关于这个文件的修改，要重启 vscode 才能生效
 *
 * 关于段落的部分，会继承 .editorconfig 的配置，这里也不额外复写了
 */
module.exports = {
	// 使用单引号
	singleQuote: true,

	// 如果对象写了引号，保留
	quoteProps: 'preserve',

	// 尾逗号
	trailingComma: 'all',

	printWidth: 100,

	importOrder: ['react', '<THIRD_PARTY_MODULES>', '^[./]'],

	plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-packagejson'],
};
