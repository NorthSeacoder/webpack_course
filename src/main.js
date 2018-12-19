require('babel-runtime/regenerator')
require("babel-register")
require("webpack-hot-middleware/client?reload=true")
require('./main.css')
require('./index.html')
require("./app")

var a = async args => {
    const {
        a,
        b
    } = args;
    await console.log('hello from the future', a, b);
    console.log("Done")
};
a({
    a: 1,
    b: 2
})