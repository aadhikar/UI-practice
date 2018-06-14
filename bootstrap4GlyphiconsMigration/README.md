Bootstrap 4 - Glyphicons migration
==================================

## 1. Install bootstrap 4 (npm install bootstrap)
## 2. Copy the fonts files from: https://github.com/twbs/bootstrap-sass/tree/master/assets/fonts/bootstrap
## 3. Copy the https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_glyphicons.scss file into your bootstrap/scss folder
## 4. Open your scss /bootstrap/bootstrap.scss and write down the following SCSS code at the end of this file:

* $bootstrap-sass-asset-helper: false;
* $icon-font-name: 'glyphicons-halflings-regular';
* $icon-font-svg-id: 'glyphicons_halflingsregular';
* $icon-font-path: '../fonts/';
* @import "glyphicons";

## 5. Recompile your code with Glyphicons.

#### *Note:* Requirements to run in npm server

{
  "name": "Bootstrap 4 - Glyphicons migration",
  "version": "0.0.1",
  "description": "Bootstrap 4 - Glyphicons migration",
  "main": "gulpfile.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "aadhikar"
  },
  "author": "Anilkumar Adhikari",
  "license": "UNLICENCED",
  "devDependencies": {
    "bootstrap": "^4.1.1",
    "bootstrap-sass": "^3.3.7",
    "del": "^2.2.1",
    "gulp-autoprefixer": "^3.1.0",
    "gulp-browserify": "^0.5.1",
    "gulp-clean-css": "^2.0.13",
    "gulp-concat": "^2.6.0",
    "gulp-connect": "^5.0.0",
    "gulp-rename": "^1.2.2",
    "gulp-ruby-sass": "^2.0.6",
    "gulp-sass": "^2.3.2",
    "gulp-sourcemaps": "^1.9.1",
    "gulp-uglify": "^2.0.0",
    "gulp-watch": "^4.3.9",
    "jquery": "^3.3.1",
    "popper.js": "^1.14.3"
  },
  "dependencies": {
    "gulp": "^3.9.1",
    "gulp-run-sequence": "^0.3.2"
  }
}
