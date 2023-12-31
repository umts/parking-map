# Parking Map

Interactive parking map for the University of Massachusetts Amherst campus

## Development

This application is a clientside-only SPA based on the [`ArcGIS Maps SDK for Javascript`][arcgis-sdk] and built/bundled
using [`vite`][vite] on the [`node.js`][nodejs] + [`npm`][npm] platform.

Backend data is provided by an [ArcGIS Online webmap][webmap], which is maintained externally by AFIT.

It is recommended that you use [`nodenv`][nodenv] to manage local node installations.

### Requirements

- `node.js` matching the version in the `.node-version` file (run `nodenv install` if using `nodenv`)

### Setup

```sh
npm install # bundle dependencies
```

### Scripts

```sh
npm run build    # builds a production bundle.
npm run dev      # starts a local development server.
npm run lint     # runs the js linter.
npm run lint:css # runs the css linter.
npm run preview  # serves a previously built production bundle.
```

## Contributing

Bug reports and pull requests are welcome on [GitHub][github].

## License

The application is available as open source under the terms of the [MIT License][license].

[arcgis-sdk]: https://developers.arcgis.com/javascript/latest/
[github]: https://github.com/umts/parking-map
[license]: https://opensource.org/licenses/MIT
[nodejs]: https://nodejs.org
[nodenv]: https://github.com/nodenv/nodenv
[npm]: https://www.npmjs.com
[vite]: https://vitejs.dev
[webmap]: https://umass-amherst.maps.arcgis.com/home/item.html?id=e1bb4ae1b0f34dd1ac705a8e4e9b72e4
