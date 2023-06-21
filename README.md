# Frontend Monorepo

This is a collection of frontend applications (`apps` dir) built on top of MSKCC DSM. They work in conjuction with various helper packages (`packages` dir) to provide code quality and component prototyping/sharing.

## Pre-requisites

First, setup nvm as your node manager first (follow directions during the install)

- Install via homebrew: `brew install nvm`

## Quick Start

- **Automatic**
  - run `pnpm run startup` to install and load the dev environment.
- **Manual**
  - run `corepack enable` then `pnpm run init` to setup the dev environment. run `pnpm run dev` to load the dev enviornments.

## Manual Setup

- set your node version to whatever is in `.nvmrc` file
- run `corepack enable` to enable `pnpm`
  - `pnpm` is our package manager and the repo workspace is optimized with it
- run `pnpm run init` to run the initial setup
  - run `pnpm run bootstrap` anytime at root to keep the dependencies in sync
- run `pnpm run dev` to load all dev environments
  - you can navigate to the respective directory and run `pnpm run dev` to load a specific dev environment

## Github process

- Create your own branch
  - `git checkout -b <branch-name>`
- after you are done with your changes, commit your changes
  - `git add .` to add all files you've changed
  - `git commit` to commit your changes
    - go throught the prompts to update messages
  - `git push` to push your changes to your branch

## Keep up-to-date with this template

- create a new `git remote` to the template repo
  - `git remote add template https://github.mskcc.org/msk/monorepo-template.git`
- fetch changes from template repo
  - `git fetch template`
  - a new branch will be created via `template/main`
- create a new branch (don't merge into main) and merge
  - `git checkout -b <branch-name>`
  - `git merge template/main --allow-unrelated-histories`
