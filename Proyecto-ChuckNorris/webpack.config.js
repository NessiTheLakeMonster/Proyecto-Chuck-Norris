const path = require('path');

module.exports = {
    entry: {
        main: '/src/js/app.js',
        about: '/src/js/clases.js',
    }, 
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};