import type { Meta, StoryObj } from "@storybook/react";

import { Banner } from "@/components";
import { BADGES } from "@mskcc/storybook-assets";

const meta: Meta<typeof Banner> = {
  title: "Example/Story Level",
  component: Banner,
  tags: ["autodocs"],
  parameters: {
    badges: [BADGES.EXPERIMENTAL],
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Primary: Story = {};
