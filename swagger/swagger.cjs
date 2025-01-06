const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const { generateApi } = require('swagger-typescript-api');

function isURL(str) {
	const pattern = new RegExp(
		'^(https?:\\/\\/)?' + // 协议
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // 域名
			'((\\d{1,3}\\.){3}\\d{1,3}))' + // 或者IP (v4) 地址
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // 端口和路径
			'(\\?[;&a-z\\d%_.~+=-]*)?' + // 查询字符串
			'(\\#[-a-z\\d_]*)?$',
		'i',
	); // 锚点
	return !!pattern.test(str);
}

const generate = (url, output, templateDirPath = path.join(__dirname, 'template')) => {
	return new Promise((resolve) => {
		generateApi({
			// set to `false` to prevent the tool from writing to disk
			output,
			...(isURL(url) ? { url } : { input: url }),
			httpClientType: 'axios',
			modular: true,
			cleanOutput: true,
			templates: path.join(templateDirPath),
			modular: true,
			extractRequestParams: true,
			extractRequestBody: true,
			unwrapResponseData: true,
			hooks: {
				// 这个钩子用来修改路由的生成
				onCreateRoute: (route) => {
					// if(route.raw.route === '/backend/system/uploadFile') {
					//   debugger
					// }
					// 特别处理 createUserUsingPost 路由
					if (route.raw.route === '/backend/user/create') {
						// 强制设置请求体类型
						// route.request.bodyType = {
						//   type: 'CreateUserRequest',
						//   // 确保生成接口定义
						//   isInterface: true,
						// };

						route.request.payload = {
							name: 'data',
							optional: false,
							type: 'any',
						};
					}
					return route;
				},
			},
		})
			.then(async ({ files, configuration }) => {
				let modules = [];
				files.forEach((file) => {
					if (!file.fileName.includes('-')) {
						modules.push({
							name: file.fileName,
						});
					}
				});
				ejs.renderFile(path.join(templateDirPath, 'index.ejs'), {
					modules,
				}).then((file) => {
					fs.writeFileSync(path.join(output, 'index.ts'), file);
					console.log('生成请求模板成功');
					resolve(true);
				});
			})
			.catch((e) => console.error(e));
	});
};

(async () => {
	await generate(
		// 'http://10.1.9.99:7983/v2/api-docs',
		// 'http://10.1.9.123:7982/v2/api-docs',
		// 'http://10.1.9.123:7984/v2/api-docs',
		'http://10.1.9.99:7986/v2/api-docs',
		// 'https://admin-backend-uat.894523.com/v2/api-docs',
		path.resolve(process.cwd(), 'src/api'),
	);
	process.exit(0);
})();
