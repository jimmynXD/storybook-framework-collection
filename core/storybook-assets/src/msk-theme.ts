import { create } from "@storybook/theming/create"
import { colors } from "./msk-colors"

export const mskTheme = create({
  brandTitle: "design system",
  brandTarget: "_blank",
  fontBase: "'gotham', sans-serif",
  brandUrl: "https://product.design.dev.aws.mskcc.org/",
  brandImage:
    "https://cdn.jsdelivr.net/npm/@mskcc/dsm-assets@1.11.1/src/storybook/design-system-logo.svg",
  base: "light",
  appBg: colors.msk.white[0],
  colorPrimary: colors.msk.gray[80],
  colorSecondary: colors.msk.gray[70],
  // base:
  // colorPrimary?:
  // colorSecondary?:
  // appBg?:
  // appContentBg?:
  // appBorderColor?:
  // appBorderRadius?:
  // fontBase?:
  // fontCode?:
  // textColor?:
  // textInverseColor?:
  // textMutedColor?:
  // barTextColor?:
  // barSelectedColor?:
  // barBg?:
  // buttonBg?:
  // buttonBorder?:
  // booleanBg?:
  // booleanSelectedBg?:
  // inputBg?:
  // inputBorder?:
  // inputTextColor?:
  // inputBorderRadius?:
  //   brandTitle?:
  // brandUrl?:
  // brandImage?:
  // brandTarget?:
  // gridCellSize?:
})
