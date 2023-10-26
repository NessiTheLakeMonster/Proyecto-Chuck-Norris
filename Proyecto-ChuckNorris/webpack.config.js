const path = require('path');

module.exports = {
    entry: {
        main: '/src/js/app.js',
        about: '/src/js/frase.js',
    }, 
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};