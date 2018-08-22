# ngjs-cli-starter

Starter project for https://github.com/DDeis/ngjs-cli

## Install

```sh
git clone https://github.com/DDeis/ngjs-cli-starter.git my-project
cd my-project
rm -rf .git/
# git init
npm i
npm start # run build | test
```

## Notes

### Webpack aliases
Available webpack aliases:
- `@src`: `/src'
- `@app`: `/src/app'
- `@common`: `/src/app/common'
- `@components`: `/src/app/components'
- `styles`: `/src/styles'

Instead of `import '../../common/directive` you can do `import '@common/directive`

### Modules
Do not forget to export `.name` of angular modules.

### Styles
Import an util sass file from the style folder in a component sass file, e.g: `@import '~styles/variables';`

## Proxy

Create a `proxy.conf.js` file in the config folder from sample.

See https://github.com/chimurai/http-proxy-middleware for advance configuration.

## Environment Variables

You can set environment variable in a `.env` file, look at the `.env-sample` for avaible options.

## Sources

- https://github.com/toddmotto/angularjs-styleguide/blob/master/i18n/fr-fr.md
- https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
- https://github.com/toddmotto/angular-1-5-components-app
- https://github.com/simpulton/eggly-es6
