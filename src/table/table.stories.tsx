import React from "react";
import preview from "#.storybook/preview";
import { Table } from ".";

const exampleTable = (
	<>
		<thead>
			<tr>
				<th>#</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Username</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
			</tr>
			<tr>
				<td>2</td>
				<td>John</td>
				<td>Loos</td>
				<td>@mlos</td>
			</tr>
			<tr>
				<td>3</td>
				<td>Joe</td>
				<td>Kot</td>
				<td>@mko</td>
			</tr>
		</tbody>
	</>
);

const meta = preview.meta({
	title: "Components/Table",
	component: Table,
	tags: ["autodocs"],
	parameters: {
		controls: {
			include: [
				"variant",
				"size",
				"bordered",
				"borderless",
				"hover",
				"striped",
				"condensed",
				"responsive",
			],
		},
	},
	argTypes: {
		striped: {
			options: [true, false],
			control: { type: "radio" },
		},
		condensed: {
			options: [true, false],
			control: { type: "radio" },
		},
	},
});

export const Default = meta.story({
	render: (args) => <Table {...args}>{exampleTable}</Table>,

	args: {
		condensed: false,
		striped: false,
	},
});

export const Condensed = meta.story({
	render: (args) => <Table {...args}>{exampleTable}</Table>,

	args: {
		condensed: true,
	},
});

export const Striped = meta.story({
	render: (args) => <Table {...args}>{exampleTable}</Table>,

	args: {
		striped: true,
	},
});

export default meta;
