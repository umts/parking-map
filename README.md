# Parking Map

Interactive parking map of the University of Massachusetts Amherst campus.

## Development

This application is client-only SPA that is bundled using [`vite`][vite] through [`node.js`][nodejs] + [`npm`][npm].
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
npm run preview  # serves a previously built production bundle.
```

## Contributing

Bug reports and pull requests are welcome on [GitHub][github].

## License

The application is available as open source under the terms of the [MIT License][license].

[github]: https://github.com/umts/parking-map
[license]: https://opensource.org/licenses/MIT
[nodejs]: https://nodejs.org
[nodenv]: https://github.com/nodenv/nodenv
[npm]: https://www.npmjs.com
[vite]: https://vitejs.dev
