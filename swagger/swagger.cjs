const path = require("path");
const fs = require("fs");
const ejs = require("ejs");
const { generateApi } = require("swagger-typescript-api");
const SwaggerJson = require("./swagger.json");

function isURL(str) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // 协议
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // 域名
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // 或者IP (v4) 地址
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // 端口和路径
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // 查询字符串
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // 锚点
  return !!pattern.test(str);
}

const generate = (url) => {
  return new Promise((resolve) => {
    generateApi({
      // set to `false` to prevent the tool from writing to disk
      output: path.resolve(process.cwd(), "src/api"),
      ...(isURL(url) ? { url } : { input: url }),
      httpClientType: "fetch",
      modular: true,
      cleanOutput: true,
      unwrapResponseData: true,
      templates: path.resolve(process.cwd(), "swagger/swagger-template"),
    })
      .then(async ({ files, configuration }) => {
        let modules = [];
        files.forEach((file) => {
          if (!file.fileName.includes("-")) {
            modules.push({
              name: file.fileName,
            });
          }
        });
        ejs
          .renderFile(
            path.join(
              path.resolve(process.cwd(), "swagger/swagger-template"),
              "index.ejs"
            ),
            {
              modules,
            }
          )
          .then((file) => {
            fs.writeFileSync(
              path.join(path.resolve(process.cwd(), "src/api"), "index.ts"),
              file
            );
            console.log("生成请求模板成功");
            resolve(true);
          });
      })
      .catch((e) => console.error(e));
  });
};

(async () => {
  await generate("http://10.1.9.123:7982/v2/api-docs");
  process.exit(0);
})();
