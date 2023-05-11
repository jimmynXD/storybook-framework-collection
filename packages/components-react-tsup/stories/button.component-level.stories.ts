import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components";
import { BADGES } from "@mskcc/storybook-assets";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Component Level",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    kind: "primary",
  },
};

Primary.parameters = {
  badges: [BADGES.STABLE],
};

export const Secondary: Story = {
  args: {
    children: "Button",
    kind: "secondary",
  },
};

Secondary.parameters = {
  badges: [BADGES.NEEDS_DESIGN],
};
