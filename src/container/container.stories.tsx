import React from "react";
import preview from "#.storybook/preview";
import { Container } from ".";
import { Row } from "../row";
import { Col } from "../col";

const meta = preview.meta({
	title: "Components/Container",
	component: Container,
	tags: ["autodocs"],
	argTypes: {
		fluid: {
			control: {
				type: "boolean",
			},
		},
	},
});

const ContainerTemplate = (args: React.ComponentProps<typeof Container>) => (
	<Container {...args}>
		<Row>
			<Col xs={12} className="bg-blue-700 px-3 py-2 text-white text-center">
				Column
			</Col>
		</Row>
	</Container>
);

export const Default = meta.story({
	render: ContainerTemplate,
	args: {},
	parameters: {
		docs: {
			description: {
				story: `Default container: centers content with horizontal padding and applies fixed max-widths.
- For medium screens (768px and up), the max width is 750px.
- For screens around 992px and wider, the max width is 970px.
- For large screens (1200px and wider), the max width is 1170px.
`,
			},
		},
	},
});

export const Fluid = meta.story({
	render: ContainerTemplate,
	args: { fluid: true },
	parameters: {
		docs: {
			description: {
				story:
					"Fluid container: centers content with horizontal padding and stretches to full viewport width.",
			},
		},
	},
});

export default meta;
