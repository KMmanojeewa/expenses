/**
 * Docs: https://laravel-mix.com/docs/6.0/installation
 * @type {(function(*=): {postcssPlugin: string, plugins})|{postcss?: boolean}}
 */

// Import required build packages
let tailwindcss = require("tailwindcss");
let mix = require("laravel-mix");

// Javascript & Vue files
mix.js("./client/js/app/index.js", "./dist/js/app.min.js")
    .copy("./client/img", "./dist/img")
    .copy("./client/videos", "./dist/videos")
    // CSS files

    // Options
    .sourceMaps()
    .options({
        processCssUrls: false,
        postCss: [
            require("autoprefixer"), // auto prefix
            require('postcss-pxtorem')({ // convert all pixel values to rem
                rootValue: 16,
                propList: ['*'],
            }),
            tailwindcss("./client/js/tailwind.config.js"), // import tailwind config
        ],
        clearConsole: true,
        publicPath: ""
    })
;

