# Test GitHub Page (test-github-page)

This projects test the build + deploy of a Quasar application via GitHub Actions to the project GitHub Page.

The action commit the deployment to the `gh_pages` branch.

Configuring GitHub Page in project Settings > Pages:
- Show the URL of the project GitHub page.
- Set source as branch gh_page


# Quasar

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js). 