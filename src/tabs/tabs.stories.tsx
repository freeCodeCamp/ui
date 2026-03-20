import React from "react";
import preview from "#.storybook/preview";
import { Tabs, TabsList, TabsTrigger, TabsContent } from ".";

const meta = preview.meta({
	title: "Components/Tabs",
	component: Tabs,
	tags: ["autodocs"],
});

export const Default = meta.story({
	render: (args) => {
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
	},

	args: {
		id: "uncontrolled-tab-example",
		defaultValue: "code",
		onSelect: () => {
			console.log("onSelect");
		},
	},
});

export default meta;
