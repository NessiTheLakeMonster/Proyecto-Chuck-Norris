const path = require('path');

module.exports = {
    entry: {
        main: './src/app.js',
        about: './src/frases.js',
    }, 
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};