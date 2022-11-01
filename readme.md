
# Description

~~Minimalistic~~ html5 boilerplate with scaling header, main and footer sections with webpack,  tailwind css and React js support.

# Goals of the template

+ To allow the content part to be small becase of the shortness of content, all the while keeping the footer at the very bottom.
+ And if the content grows, a vertical scroll bar should appear as you would expect to work on any other website.
+ Have a basic setup of **webpack** with basic css-loader.
+ Allow using tailwind css framework
+ Abbility to use React js framework

# Tech

+ Html, Css
+ webpack
+ tailwind css
+ React js

## Ipsum provided by

https://baconipsum.com/

# Npm script descriptions

 - npm run build
   - injects inline styles into template files in ***src/assets/index.html***
 - npm run build:production
   - extracts css into a seperate file
 - npm run watch
   - starts webpack in watch mode which waits for file changes in the dependency tree, and triggers a recompile
 - npm run start
   - starts webpack dev server which staticly hosts the contents of folder **./dist** with hot reload active

## How to use in development

Start **npm run watch** and start **npm run start** in seperate command line windows. (or setup another task which runs both in parallel)

## Boilerplate usage, programming practices applicable
- absolute module resolving: just use *'import Module from '**js**/module'*. Where the part of the path 'js' have been set up as an alias to *./src* folder

## Random usefull links
- [Webpack asset managements how to](https://webpack.js.org/guides/asset-modules/)

## Attribution
- [Grilled food icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/grilled-food)
