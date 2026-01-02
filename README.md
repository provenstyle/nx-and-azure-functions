# Nx And Azure Functions

## Goals

* Use nx to manage a typescript mono repo
* Share libraries locally betweens libs and deployed Azure Function
* Bundle library code and app code in my function app
* Manage npm dependencies needed for deployment

## Dependencies already setup locally

* node and npm
* az
* func

## Mono repo setup

Create the mono repo
```
  npx create-nx-workspace@latest nx-and-azure-functions --preset=ts 
```

Add a typescript library
```
  npx nx g @nx/js:lib packages/format --bundler=tsc --unitTestRunner=vitest --linter=eslint
```

Create a function app
```
  func init app/azureFunctionHost --worker-runtime node --language typescript --skip-npm-install
```

Create a function endpoint
```
  cd app/azureFunctionHost
  func new --language typescript --name helloWorld --template "HTTP trigger"
```

## Manual changes to azureFunctionHost

* add an index.ts exporting the endpoint
* delete the package.json scripts
* delete the package.json devDependencies
* delete the .vscode directory
* add a project.json

## Root level package.json

* npm install --save-dev @types/node@20.x
* npm install --save-dev azure-functions-core-tools
* npm install @azure/functions
* npm install lodash @types/lodash

## nx.json

nx's current cli ui message up my zsh so I'm turning it off

```
  "tui": {
    "enabled": false
  }
```
