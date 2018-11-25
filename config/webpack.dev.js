const path = require("path")
module.exports = {
    entry: {
        main: "./src/main.js"
    },
    mode: "development",
    output: {
        filename: "[name].js",
        //__dirname 当前文件所在文佳佳路径
        path: path.resolve(__dirname, "../dist"),
        //TODO: devserver 时生效，但未见打包后文件
        publicPath: '/js/',
    },
    devServer: {
        contentBase: "dist"
    }
}