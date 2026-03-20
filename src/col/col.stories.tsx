import React from "react";
import preview from "#.storybook/preview";
import { Col } from ".";

const meta = preview.meta({
	title: "Components/Col",
	component: Col,
	tags: ["autodocs"],
	argTypes: {
		className: { control: { type: "text" } },
		xs: { options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined] },
		sm: { options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined] },
		md: { options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined] },
		lg: { options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined] },
		xsOffset: { options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined] },
		smOffset: { options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined] },
		mdOffset: { options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined] },
		lgOffset: {
			options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, undefined],
		},
	},
});

export const WithoutOffset = meta.story({
	render: () => (
		<div className="container mx-auto">
			<Col xs={12} sm={6} md={4} lg={3} className="mb-4 bg-blue-700">
				<p className="text-white px-3 py-2 text-center">xs=12 sm=6 md=4 lg=3</p>
			</Col>
			<Col xs={12} sm={6} md={4} lg={3} className="mb-4 bg-blue-700">
				<p className="text-white px-3 py-2 text-center">xs=12 sm=6 md=4 lg=3</p>
			</Col>
			<Col xs={12} sm={12} md={4} lg={6} className="mb-4 bg-blue-700">
				<p className="text-white px-3 py-2 text-center">
					xs=12 sm=12 md=4 lg=6
				</p>
			</Col>
			<Col xs={12} sm={12} md={12} lg={12} className="mb-4 bg-blue-700">
				<p className="text-white px-3 py-2 text-center">
					Full width at all breakpoints
				</p>
			</Col>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Responsive example using `xs`, `sm`, `md`, `lg` without offsets.",
			},
		},
	},
});

export const WithOffset = meta.story({
	render: () => (
		<div className="container mx-auto">
			<Col xs={12} sm={6} md={4} lg={3} className="mb-4 bg-blue-700">
				<p className="text-white px-3 py-2 text-center">xs=12 sm=6 md=4 lg=3</p>
			</Col>
			<Col
				xs={12}
				sm={6}
				mdOffset={2}
				lgOffset={3}
				className="mb-4 bg-blue-700"
			>
				<p className="text-white px-3 py-2 text-center">
					xs=12 sm=6 mdOffset=2 lgOffset=3
				</p>
			</Col>
			<Col xs={12} sm={12} md={4} lg={4} className="mb-4 bg-blue-700">
				<p className="text-white px-3 py-2 text-center">
					xs=12 sm=12 md=4 lg=4
				</p>
			</Col>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Responsive example that uses `xs`, `sm`, `md`, `lg` with offset props to demonstrate shifting columns.",
			},
		},
	},
});

export default meta;
