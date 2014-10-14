Contao Boilerplate Setup with basic gulp and bower files
=======================

Install
=======================

First install node.js and npmhttp://nodejs.org/
Then install BOWER http://bower.io

Clone the git repro

`git clone https://github.com/westwerk-ac/contao-gulp-boilerplate.git`

Install bower dependencies (located in bower.json)

`bower install`

Install node modules (located in package.json)

`npm install`

Gulpfile
=======================

Runnning `gulp` will start the less compiler, autoprefixer, minify the css and put the rendered css back into the theme folder. Also the bootstrap and font-awesome fonts are copied into the theme folder for easier access in your less files.

Running `gulp dev` watch your files for changes and triggers the live reload also it will not minify and concat the css files.

Structure
=======================

`/files/theme/less/main.less`

Includes the bootstrap.less and is the right place for all your cool custom stuff

`/files/theme/less/partials/*`

Home for your cool custom less stuff

`/files/theme/less/bootstrap.less`

Imports the bootstra core files loaded throw bower but includes an own variables.less file from partials/

`/files/theme/css/`

Rendered css files

`/files/theme/fonts/`

(web)fonts

`/files/theme/img/`

Place for your images you use in your css file

