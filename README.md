# React / Redux Boilerplate
Simple React / Redux boilerplate with webpack 4, redux-thunk, and axios.
```Shell
npx react-redux-bp my-app
```

# Commands
## Development
```Shell
npm run start
```
Starts the development server on port 3000 with Hot Module Replacement enabled.
To access the server through LAN, change devServer.host to 0.0.0.0 in webpack.dev.js.

## Production
```Shell
npm run build
```
Builds the application for development. Applies minification and tree shaking.
Generates a bundle and a source map in the build folder.

## Tests
```Shell
npm run test
```

## Analyze bundle.js
Install source-map-explorer
```Shell
npm install -g source-map-explorer
```
Analyze:
```Shell
source-map-explorer main.[hash].js main.[hash].js.map
```

# Features
- cache busting
- sass (scss)
- development server
- hot module replacement
- minification and tree shaking for production
- source maps for both dev and prod
- Redux
- Jest with Enzyme
- ESLint (Airbnb config)

# TODO
add linter