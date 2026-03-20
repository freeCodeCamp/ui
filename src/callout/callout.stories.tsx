import React from "react";
import preview from "#.storybook/preview";

import { Callout } from "./callout";
import { Button } from "../button";

const meta = preview.meta({
	title: "Components/Callout",
	component: Callout,
	tags: ["autodocs"],
});

export const Tip = meta.story({
	args: {
		children:
			"Eaque non tempore porro quod voluptates rerum ipsam. Consequatur ea voluptate quo tempora autem quod. Voluptatem perspiciatis non mollitia. Dicta non necessitatibus laboriosam est aut cum eos et. Animi pariatur aliquid sint ipsum nam occaecati nisi sit.",
		variant: "tip",
		label: "Tip",
	},
});

export const Note = meta.story({
	args: {
		children:
			"Eaque non tempore porro quod voluptates rerum ipsam. Consequatur ea voluptate quo tempora autem quod. Voluptatem perspiciatis non mollitia. Dicta non necessitatibus laboriosam est aut cum eos et. Animi pariatur aliquid sint ipsum nam occaecati nisi sit.",
		variant: "note",
		label: "Note",
	},
});

export const Warning = meta.story({
	args: {
		children:
			"Eaque non tempore porro quod voluptates rerum ipsam. Consequatur ea voluptate quo tempora autem quod. Voluptatem perspiciatis non mollitia. Dicta non necessitatibus laboriosam est aut cum eos et. Animi pariatur aliquid sint ipsum nam occaecati nisi sit.",
		variant: "warning",
		label: "Warning",
	},
});

export const Caution = meta.story({
	args: {
		children:
			"Eaque non tempore porro quod voluptates rerum ipsam. Consequatur ea voluptate quo tempora autem quod. Voluptatem perspiciatis non mollitia. Dicta non necessitatibus laboriosam est aut cum eos et. Animi pariatur aliquid sint ipsum nam occaecati nisi sit.",
		variant: "caution",
		label: "Caution",
	},
});

export const WithButtonAndLink = meta.story({
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
});

export default meta;
