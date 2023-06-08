import { colors } from "./msk-colors"
import type { defaultBadgesConfig } from "@geometricpanda/storybook-addon-badges"

export enum BADGES {
  STABLE = "stable",
  NEEDS_DESIGN = "needs-design",
  NEEDS_UX = "needs-ux-review",
  REVIEW_BRAND = "needs-brand-review",
  REVIEW_DEV = "needs-dev-review",
  EXPERIMENTAL = "experimental",
  DEPRECATED = "deprecated",
}

export const badges: typeof defaultBadgesConfig = {
  stable: {
    title: "Stable",
    styles: {
      backgroundColor: colors.msk.green[40],
      color: colors.msk.black[100],
      borderColor: colors.msk.black[100],
    },
    tooltip: {
      title: "Component is stable",
      desc: "This component is stable and can be used in production.",
    },
  },
  "needs-design": {
    title: "Needs Design",
    styles: {
      backgroundColor: colors.msk.yellow[30],
      color: colors.msk.black[100],
      borderColor: colors.msk.black[100],
    },
  },
  "needs-ux-review": {
    title: "Needs UX Review",
    styles: {
      backgroundColor: colors.msk.yellow[30],
      color: colors.msk.black[100],
      borderColor: colors.msk.black[100],
    },
  },
  "needs-brand-review": {
    title: "Needs Brand Review",
    styles: {
      backgroundColor: colors.msk.yellow[30],
      color: colors.msk.black[100],
      borderColor: colors.msk.black[100],
    },
  },
  "needs-dev-review": {
    title: "Needs Dev Review",
    styles: {
      backgroundColor: colors.msk.yellow[30],
      color: colors.msk.black[100],
      borderColor: colors.msk.black[100],
    },
  },
  experimental: {
    title: "Experimental",
    styles: {
      backgroundColor: colors.msk.magenta[50],
      color: colors.msk.black[100],
      borderColor: colors.msk.black[100],
    },
  },
  deprecated: {
    title: "Deprecated",
    styles: {
      backgroundColor: colors.msk.magenta[50],
      color: colors.msk.black[100],
      borderColor: colors.msk.black[100],
    },
  },
}
