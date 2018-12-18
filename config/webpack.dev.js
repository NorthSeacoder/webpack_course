const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: {
        main: ["core-js/fn/promise", "./src/main.js"]
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
        overlay: true,
        hot: true,
        stats: {
            colors: true
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: "babel-loader"
                }],
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                ]
            },
            {
                test: /\.html$/,
                use: [
                    // {
                    //     loader: "file-loader",
                    //     options: {
                    //         name: "[name].html"
                    //     }
                    // }, {
                    //     loader: "extract-loader"
                    // },
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src"]
                        }
                    },
                ]
            },
            {
                test: /\.jpg|gif|png/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "images/[name].[ext]"
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ]

}