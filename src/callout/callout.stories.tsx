import { Meta, StoryObj } from "@storybook/react";

import { Callout } from "./callout";

const story = {
	title: "Components/Callout",
	component: Callout,
} satisfies Meta<typeof Callout>;

type Story = StoryObj<typeof Callout>;

export const Tip: Story = {
	args: {
		children:
			"Eaque non tempore porro quod voluptates rerum ipsam. Consequatur ea voluptate quo tempora autem quod. Voluptatem perspiciatis non mollitia. Dicta non necessitatibus laboriosam est aut cum eos et. Animi pariatur aliquid sint ipsum nam occaecati nisi sit.",
		variant: "tip",
	},
};

export const Note: Story = {
	args: {
		children:
			"Eaque non tempore porro quod voluptates rerum ipsam. Consequatur ea voluptate quo tempora autem quod. Voluptatem perspiciatis non mollitia. Dicta non necessitatibus laboriosam est aut cum eos et. Animi pariatur aliquid sint ipsum nam occaecati nisi sit.",
		variant: "note",
	},
};

export const Warning: Story = {
	args: {
		children:
			"Eaque non tempore porro quod voluptates rerum ipsam. Consequatur ea voluptate quo tempora autem quod. Voluptatem perspiciatis non mollitia. Dicta non necessitatibus laboriosam est aut cum eos et. Animi pariatur aliquid sint ipsum nam occaecati nisi sit.",
		variant: "warning",
	},
};

export const Caution: Story = {
	args: {
		children:
			"Eaque non tempore porro quod voluptates rerum ipsam. Consequatur ea voluptate quo tempora autem quod. Voluptatem perspiciatis non mollitia. Dicta non necessitatibus laboriosam est aut cum eos et. Animi pariatur aliquid sint ipsum nam occaecati nisi sit.",
		variant: "caution",
	},
};

export default story;
