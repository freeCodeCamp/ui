import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "./menu-item";
import { Dropdown } from "./drop-down";
const story = {
	title: "Components/Dropdown",
	component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export const Menus: StoryObj<typeof Dropdown> = {
	render: () => (
		<Dropdown>
			<Dropdown.Toggle>Options</Dropdown.Toggle>
			<Dropdown.Menu>
				<MenuItem onClick={() => {}}>Unlock Hidden Achievements</MenuItem>
				<MenuItem href="#" onClick={(e) => e.preventDefault()}>
					Enable Zen Coding Mode
				</MenuItem>
				<MenuItem href="#" onClick={(e) => e.preventDefault()}>
					Generate Motivational Quote
				</MenuItem>
			</Dropdown.Menu>
		</Dropdown>
	),
};

export const DropUp: StoryObj<typeof Dropdown> = {
	render: () => (
		<div
			style={{
				height: "500px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Dropdown dropup>
				<Dropdown.Toggle>Options</Dropdown.Toggle>
				<Dropdown.Menu>
					<MenuItem onClick={() => {}}>Reveal Easter Egg</MenuItem>
					<MenuItem href="#" onClick={(e) => e.preventDefault()}>
						Switch to Light Mode
					</MenuItem>
					<MenuItem href="#" onClick={(e) => e.preventDefault()}>
						Open Changelog
					</MenuItem>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	),
};

export const FullWidth: StoryObj<typeof Dropdown> = {
	render: () => (
		<Dropdown block>
			<Dropdown.Toggle>Full width Dropdown</Dropdown.Toggle>
			<Dropdown.Menu>
				<MenuItem onClick={() => {}}>Start Pomodoro Timer</MenuItem>
				<MenuItem href="#" onClick={(e) => e.preventDefault()}>
					Mute Notifications
				</MenuItem>
				<MenuItem href="#" onClick={(e) => e.preventDefault()}>
					View Keyboard Shortcuts
				</MenuItem>
			</Dropdown.Menu>
		</Dropdown>
	),
};
export default story;
