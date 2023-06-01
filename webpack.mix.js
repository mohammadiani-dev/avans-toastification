const { js } = require("laravel-mix");
const mix = require("laravel-mix");

mix.options({
  processCssUrls: false,
});

mix
  .js('test/js/main.js' , 'test/js/main.min.js')
  .sass('dist/sass/toast.scss' , 'test/css/toast.css')