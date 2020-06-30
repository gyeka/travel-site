

const path = require('path')

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')//index.html-el egy szinten legyen
    },
    /*
    devServer: {
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000
    },
    */
    mode: 'development',

}

