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

```
  npx create-nx-workspace@latest nx-and-azure-functions --preset=ts 
  npx nx g @nx/js:lib packages/format --bundler=tsc --unitTestRunner=vitest --linter=eslint
```

