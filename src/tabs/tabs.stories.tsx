import React from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from ".";

const story = {
	title: "Example/Tabs",
	component: Tabs,
} satisfies Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (args) => {
	return (
		<Tabs {...args}>
			<TabsList>
				<TabsTrigger value="code">Code</TabsTrigger>
				<TabsTrigger value="tests">Tests</TabsTrigger>
			</TabsList>
			<TabsContent value="code">
				<code>here is a code element.</code>
			</TabsContent>
			<TabsContent value="tests">Here is the test for the code.</TabsContent>
		</Tabs>
	);
};

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
	render: Template,

	args: {
		id: "uncontrolled-tab-example",
		defaultValue: "code",
		onSelect: () => {
			console.log("onSelect");
		},
	},
};

export default story;
