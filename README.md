Contao Boilerplate Setup with basic gulp and bower files
=======================

Installation
=======================

1. Install node.js and npm from http://nodejs.org/
2. Install Bower from http://bower.io (make sure to install Bower globally via the `-g` flag)
3. Clone this repository: `git clone https://github.com/westwerk-ac/contao-gulp-boilerplate.git`
4. Install bower dependencies (bower.json): `bower install`
5. Install node modules (package.json): `npm install`

Workflow
=======================

Runnning `gulp` will start the less compiler, autoprefixer, minify the css and put the rendered css back into the theme folder. The bootstrap and font-awesome fonts will be copied into the theme folder for easier access in your less files. Note that `gulp` will only run this once and then exit.

Running `gulp dev` will watch your files for changes and triggers the live reload. It will also **not** minify and concatenate css files.

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

