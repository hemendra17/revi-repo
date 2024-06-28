# Revi homepage

> A React && Javascript project.
> Please, use *master* branch to build last stable version of app.

## Build Setup
The project require node.js v.12.8 or above.
GIT of latest version should be installed.
Tests does not needed according current size of project.

``` bash
# install dependencies in safe mode
npm run setup

# serve with hot reload at localhost:8080
# project will be builded to "/check" folder
npm run dev

# build for production with minification
# result will be in "/build" folder
npm run build

```

## GITHUB actions flow
* *master* - production branch; uses for deploy app manually
* *main* branch commit - run app autobuild and, possibly (don't work now), deploy
* *gh-pages* branch - contains auto builded app, stage mode

## Autobuild and autodeploy
We uses GitHub actions to create new build and GitHub pages for hosting of betta version. Every commit to *main* branch leads to creating of new build and deploy it to https://zyrl-sf.github.io/revi/. Builded version is stored in *gh-pages* branch (this branch is source for app's hosting).
For more information look here: https://github.com/marketplace/actions/deploy-to-github-pages#:~:text=GitHub%20Pages%20Deploy%20Action%20%F0%9F%9A%80,handle%20cross%20repository%20deployments%20too.


## Description

### WebpackProvidePlugin
Added. Now it's no need to type `import React from 'react'` in every .jsx file.

### React
React props are check with prop-types: https://reactjs.org/docs/typechecking-with-proptypes.html

### Routing
From here: https://reactrouter.com/

### How to config app (includes texts, images, videos, lists and other):

1. Open ./src/config.js - it's a common config file with links to configs of every pages.
2. By imported object names - find file with appropriate name of page and open it.
3. Every page config file divided to sections (usually called by slide header text). Anyway, object's key fields is associated with sequence of editing page slides. First key contain information of first page's slide etc.
4. Use text search to find needed text (or text above or below editing object), find needed slide configuration key and update data.
5. Images, usually, imports in the top of config and converts to variables. Path to the image is in the import string.
6. Some configs are using in more then one place. This configs are moved to separate folder (/_common_configs). Edit them in a case to change some slide in whole application. In a case changes for custom page - import config and update needed fields with construction `Object.assign({}, _imported_config_, {_your_param_: _your_value_})`.
7. If you need new or improving behavior of slides - try to config it in file if it possible.

Incorrect changes of file could break the app. Be aware in using.
You can find some strang paths in jsx files (like 'Comass/...'). Don't be afraid - it's aliases for universal links to some resources, defined in webpack.config.js.
Webpack config using predefined import of react and react-dom in every jsx file. It's defined in webpack.config.js.