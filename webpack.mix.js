const { js } = require("laravel-mix");
const mix = require("laravel-mix");

mix.options({
  processCssUrls: false,
});

mix
  .js('main.js' , 'main.min.js')