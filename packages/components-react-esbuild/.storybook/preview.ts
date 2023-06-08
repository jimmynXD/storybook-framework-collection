import type { Preview } from "@storybook/react"
import "@mskcc/storybook-assets/styles/preview-head.css"
import { badges } from "@mskcc/storybook-assets"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    badgesConfig: {
      ...badges,
    },
  },
}

export default preview
