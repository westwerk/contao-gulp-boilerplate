# Contao Boilerplate Setup with basic gulp and bower files

This repository contains a starting point to theme development with [Contao](https://github.com/contao/core). Tools like less, bower and gulp make it easier for you to get your assets under control while maintaining a convenient workflow.

## Installation

1. Install [node.js and npm](http://nodejs.org/)
2. Install [Bower](http://bower.io) (make sure to install Bower globally via the `-g` flag)
3. Install [JShint](http://www.jshint.com/) (make sure to install JSHint globally via the `-g` flag)
4. Clone this repository: `git clone https://github.com/westwerk-ac/contao-gulp-boilerplate.git`
5. Install bower dependencies (bower.json): `bower install`
6. Install node modules (package.json): `npm install`

## Workflow

Runnning `gulp` will start the less compiler, autoprefixer, minify the css and put the rendered css back into the theme folder. The bootstrap and font-awesome fonts will be copied into the theme folder for easier access in your less files. Note that `gulp` will only run this once and then exit.

Running `gulp dev` will start watching your files for changes and triggers the live reload. It will **not** minify and concatenate CSS files.

### JSHint

We're using JSHint to lint our JS files. If you want to disable that, remove the watcher from `gulp/tasks/watch.js`. You can find the JSHint config in `package.json`.

### Additional Bower assets

Install new JS/CSS assets with `bower search` and `bower install`. To save these as dependencies, use the `-D` or `-S` flags (for more information, see the [Bower documentation](http://bower.io/docs/api/#install)). 

### Compiled files

It's usually a good idea to flag `.css` and `.map` files as `binary` to remove their output when diffing. See our `.gitattributes` for an example (you can find [more information on git attributes here](http://git-scm.com/docs/gitattributes) - they are a very useful and often overlooked feature of git!).

## Structure

`/files/theme/less/main.less`

Includes the bootstrap.less and is the right place for all your cool custom stuff

`/files/theme/less/partials/*`

Home for your cool custom less stuff

`/files/theme/less/bootstrap.less`

Imports the bootstrap core files loaded through bower but includes a custom `variables.less` from `partials/`, so you can user `bower update` without losing your overwrites.  

`/files/theme/{css,fonts,img}/`

Compiled CSS files, fonts and a place for your images.

