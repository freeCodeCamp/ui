import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "./menu-item";
import { Dropdown } from "./drop-down";
const story = {
	title: "Components/Dropdown",
	component: Dropdown,
} satisfies Meta<typeof Dropdown>;

const DropDownChildren = () => (
	<>
		<Dropdown.Toggle>Options</Dropdown.Toggle>
		<Dropdown.Menu>
			<MenuItem onClick={() => {}}>Option 1</MenuItem>
			<MenuItem href="#" onClick={(e) => e.preventDefault()}>
				Option 2
			</MenuItem>
			<MenuItem href="#" onClick={(e) => e.preventDefault()}>
				Option 3
			</MenuItem>
		</Dropdown.Menu>
	</>
);

const DropUpChildren = () => (
	<>
		<Dropdown.Toggle>Options</Dropdown.Toggle>
		<Dropdown.Menu>
			<MenuItem onClick={() => {}}>Option 1</MenuItem>
			<MenuItem href="#" onClick={(e) => e.preventDefault()}>
				Option 2
			</MenuItem>
			<MenuItem href="#" onClick={(e) => e.preventDefault()} disabled>
				Option 3
			</MenuItem>
		</Dropdown.Menu>
	</>
);

export const Menus: StoryObj<typeof Dropdown> = {
	decorators: [
		(Story) => (
			<div
				style={{
					height: "220px",
					width: "220px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
				}}
			>
				{Story()}
			</div>
		),
	],
	render: () => (
		<Dropdown>
			<DropDownChildren />
		</Dropdown>
	),
};

export const DropUp: StoryObj<typeof Dropdown> = {
	decorators: [
		(Story) => (
			<div
				style={{
					height: "220px",
					width: "220px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-end",
				}}
			>
				{Story()}
			</div>
		),
	],
	args: {
		children: <DropUpChildren />,
		dropup: true,
	},
};
export default story;
