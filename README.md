# Test Quasar/Vue app deployment to GitHub Page via GitHub actions

This projects test the build + deploy of a Quasar application via GitHub Actions to this [project GitHub Page](https://blep.github.io/test_github_page/).

[GitHub actions](https://docs.github.com/en/actions) are "scripts" automatically executed by GitHub when you push (or create an issue...). [GitHub Pages](https://docs.github.com/en/pages) is a feature provided by GitHub that allows publishing a given project branch as a static web-site.

Actions are grouped in sequence in a "workflow". The workflow deploying this application to GitHub is found in [.github/workflows/release-to-gh_page-branch.yml](.github/workflows/release-to-gh_page-branch.yml). Uses GitHub online editor to edit action workflow as it provides smart completion and browsing/searching the library of available actions.

The log of the workflow execution can be found on the [Actions tab](https://github.com/blep/test_github_page/actions/workflows/pages/pages-build-deployment).

The [action workflow](.github/workflows/release-to-gh_page-branch.yml) copy the `quasar build` results found in `dist/pwa` to the `gh_pages` branch.

Configuring GitHub Page in project Settings > Pages:
- Show the URL of the project GitHub page.
- Set source as branch gh_pages
  - either create the branch manually 
  - or change this settings after push a first time (causing the action workflow to create the branch)
- Added the action workflow to the project `github/workflows` directory. See file: .github/workflows/release-to-gh_page-branch.yml

## Related documentations

- [Quasar getting started](https://quasar.dev/start/quasar-cli)
- [Quasar Progressive Web Application](https://quasar.dev/quasar-cli-webpack/developing-pwa/introduction) (off-line app)
- [GitHub actions documentation](https://docs.github.com/en/actions)
- [Github action setup-node](https://github.com/actions/setup-node)
- [GitHub Pages Action](https://github.com/peaceiris/actions-gh-pages) by peaceiris
- [GitHub Pages documentation](https://docs.github.com/en/pages)


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
