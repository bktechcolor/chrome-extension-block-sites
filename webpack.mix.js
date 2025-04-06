
// this file imported laravel-mix packaged for convert scss file into css file
// in this case we convert popup.scss file to css file

let mix = require('laravel-mix');
mix.setPublicPath('./')
    .sass('src/assets/popup.scss','dist/css')
    .options({
        processCssUrls: false
    })