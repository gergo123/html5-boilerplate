
# Description

~~Minimalistic~~ html5 boilerplate with scaling header, main and footer sections with webpack and tailwind css support.

# Goals of the template

+ To allow the content part to be small becase of the shortness of content, all the while keeping the footer at the very bottom.
+ And if the content grows, a vertical scroll bar should appear as you would expect to work on any other website.
+ Have a basic setup of **webpack** with basic css-loader.
+ Allow using tailwind css framework

# Tech
+ Html, Css
+ webpack
+ tailwind css

## Ipsum provided by
https://baconipsum.com/

# Npm script descriptions

 - npm run build
 -- injects inline styles into template files in ***src/assets/index.html***
 - npm run build:production
 -- extracts css into a seperate file
 - npm run watch
 -- starts a node module which waits for file changes, than runs the build npm task