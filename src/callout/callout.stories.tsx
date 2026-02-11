import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Callout } from "./callout";
import { Button } from "../button";

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
		label: "Tip",
	},
};

export const Note: Story = {
	args: {
		children:
			"Eaque non tempore porro quod voluptates rerum ipsam. Consequatur ea voluptate quo tempora autem quod. Voluptatem perspiciatis non mollitia. Dicta non necessitatibus laboriosam est aut cum eos et. Animi pariatur aliquid sint ipsum nam occaecati nisi sit.",
		variant: "note",
		label: "Note",
	},
};

export const Warning: Story = {
	args: {
		children:
			"Eaque non tempore porro quod voluptates rerum ipsam. Consequatur ea voluptate quo tempora autem quod. Voluptatem perspiciatis non mollitia. Dicta non necessitatibus laboriosam est aut cum eos et. Animi pariatur aliquid sint ipsum nam occaecati nisi sit.",
		variant: "warning",
		label: "Warning",
	},
};

export const Caution: Story = {
	args: {
		children:
			"Eaque non tempore porro quod voluptates rerum ipsam. Consequatur ea voluptate quo tempora autem quod. Voluptatem perspiciatis non mollitia. Dicta non necessitatibus laboriosam est aut cum eos et. Animi pariatur aliquid sint ipsum nam occaecati nisi sit.",
		variant: "caution",
		label: "Caution",
	},
};

export const WithButtonAndLink: Story = {
	args: {
		variant: "tip",
		label: "Tip",
		children: (
			<>
				<p>
					This is a callout with a{" "}
					<a href="#test" onClick={(e) => e.preventDefault()}>
						link
					</a>{" "}
					and a button.
				</p>
				<Button>Click me</Button>
			</>
		),
	},
};

export default story;
