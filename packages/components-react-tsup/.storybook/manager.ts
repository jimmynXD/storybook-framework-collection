import { mskTheme } from "@mskcc/storybook-assets"
import { addons } from "@storybook/manager-api"

addons.setConfig({
  theme: mskTheme,
  sidebar: {
    showRoots: true,
  },
})
