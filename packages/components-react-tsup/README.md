# `@mskcc/team-components`

> UI package generator and Storybook prototyping template.
>
> Build and compile your components. Prototyping with Storybook.

## Get started

You can compile your components and run Storybook to prototype your components.

## Development

- `pnpm run dev` to compile your components and run Storybook on port `6006`. It
  will run the 2 commands below.
  - `pnpm run dev:ui` to only compile just your components and watch for
    changes.
  - `pnpm run dev:sb` to only run Storybook on port `6006`.

## Building component package

- `pnpm run build:ui` to compile for common builds
- `pnp run build:esbuild` to compile the stylesheets also
- TODO: publishing

## Production

- `pnpm run build` to compile your components and storybook for production.
  - `pnpm run build:ui` to only compile your components.
  - `pnpm run build:sb` to only compile Storybook for deployment.

## Create your component libary

`components` directory is where you will build your components. The injection
file is located at `components/index.ts`. When building your component (e.g.
Button.tsx), we use namespace exporting so that we only need to import it inside
the `index.ts` file.

```typescript
// components/Button.tsx
export function Button() {
  ...
}

// components/index.ts
export * from './Button';
```

When someone wants to use it, they would import it into their file like so:

```typescript
import { Button } from '@msk/team-components';
```

## Storybook

Storybook configurations are located inside `.storybook` directory. By default,
we have a `stories` folder in the root of your project. This is where you should
put your stories. We have a package `@mskcc/storybook-assets` that houses our
storybook styles. You will see it used within the configurations as well as
stories itself.

- `.storybook/preview.ts` - for preview (component) panel. Add global
  stylesheets or any other attributes that you want to exist in all stories.
- `.storybook/manager.ts` - for manager (sidebar) panel. We have our team
  injected there.
- `.storybook/main.ts` - for Storybook configurations. You can define a
  different path for your stories here.
  - `.storybook/manager-head.html` - escape hatch for injecting stylesheets into
    the manager panel.
