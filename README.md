# Frontend Monorepo

## Pre-requisites

First, setup nvm as your node manager first

- Install via homebrew: `brew install nvm`

---

Add the following to your shell profile e.g. ~/.profile or ~/.zshrc:

export NVM_DIR="$HOME/.nvm"
[ -s "$HOMEBREW_PREFIX/opt/nvm/nvm.sh" ] && \. "$HOMEBREW_PREFIX/opt/nvm/nvm.sh" # This loads nvm
[ -s "$HOMEBREW_PREFIX/opt/nvm/etc/bash_completion.d/nvm" ] && \. "$HOMEBREW_PREFIX/opt/nvm/etc/bash_completion.d/nvm" # This loads nvm bash_completion

---

## Quick Start

Once you have nvm installed, run `pnpm run startup` to install and load the dev environment.

## Getting started

- set your node version to whatever is in `.nvmrc` file
- run `corepack enable` to enable `pnpm`
  - `pnpm` is our package manager and the repo workspace is optimized with it
- then run `pnpm run init` to run the initial setup
- run `pnpm run bootstrap` to complete the dependency setup
  - run this command anytime at root to keep the dependencies in sync
- run `pnpm run dev` to load all dev environments
  - you can navigate to the respective directory and run `pnpm run dev` to load a specific dev environment

## Breakdown

- root files
  - `commitlinterrc.json` sets your commit message format and rules
  - `.syncpackrc.js` keeps all the package.json in sync
  - `.nvmrc` lets nvm node manager the version of node the repo is using
  - `turbo.json` is what we use to manage how we run scripts and handle cache throughout the monorepo
  - `dsm-ref.code-workspace` controls the vscode workspace settings
- `packages` directory handles packages that are used throughout the monorepo
  - `eslint-config-local` handles all the code quality and linting rules
  - `prettier-config-local` handles all the code formatting (look) rules
  - `tsconfig-local` handles all the typescript rules
- `apps` (application) directory handles all the web applications
  - `web` is the main application

```

```
