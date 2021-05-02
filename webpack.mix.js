const mix = require('laravel-mix');

mix.sass('src/scss/master.scss', 'dist/master.css').setPublicPath('dist/css/');
