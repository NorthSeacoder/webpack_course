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
        publicPath: '/',
    },
    devServer: {
        contentBase: "dist",
        overlay: true
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
            ]
        }, {
            test: /\.html$/,
            use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].html"
                    }
                }, {
                    loader: "extract-loader"
                },
                {
                    loader: "html-loader",
                    options: {
                        attrs: ["img:src"]
                    }
                },
            ]
        }, {
            test: /\.jpg|gif|png/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "images/[name].[ext]"
                }
            }]
        }]
    }

}