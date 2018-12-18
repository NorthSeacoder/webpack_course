import express from 'express'
import path from 'path'
import webpack from 'webpack';
import config from '../../config/webpack.dev';

const server = express()

const compile = webpack(config)
const webpackDevkMiddleware = require("webpack-dev-middleware")(compile, config.devServer)
const webpackHotMiddleware = require("webpack-hot-middleware")(compile)

server.use(webpackDevkMiddleware)
server.use(webpackHotMiddleware)

const staticMiddleware = express.static("dist")
server.use(staticMiddleware)

debugger
server.listen(8080, () => {
    console.log("server is listening")
})