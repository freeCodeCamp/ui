import React, { useState, useRef } from "react";
import { StoryObj, StoryFn, Meta } from "@storybook/react";

import { Button } from "../button";
import { FormControl } from "../form-control";
import { Spacer } from "../spacer";
import { Modal } from "./modal";
import {
	type ModalProps,
	type HeaderProps,
	type BodyProps,
	type FooterProps,
} from "./types";

type StoryProps = ModalProps &
	HeaderProps & {
		bodyAlignment: BodyProps["alignment"];
		footerAlignment: FooterProps["alignment"];
	};

type Story = StoryObj<StoryProps>;

const story = {
	title: "Components/Modal",
	component: Modal,
	args: {
		size: "medium",
		variant: "default",
	},
	argTypes: {
		open: {
			control: false,
		},
		onClose: {
			control: false,
		},
		size: {
			options: ["medium", "large", "xLarge"],
		},
		variant: {
			options: ["default", "danger"],
		},
	},
} satisfies Meta<typeof Modal>;

const DefaultTemplate: StoryFn<StoryProps> = ({
	showCloseButton,
	bodyAlignment,
	...modalProps
}: StoryProps) => {
	const [open, setOpen] = useState(false);

	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={() => setOpen(true)}>Open modal</Button>
			<Modal {...modalProps} open={open} onClose={handleClose}>
				<Modal.Header showCloseButton={showCloseButton}>
					Lorem ipsum
				</Modal.Header>
				<Modal.Body alignment={bodyAlignment}>
					<p>
						Laboriosam autem non et nisi. Ut voluptatem sit beatae assumenda
						amet aliquam corporis.
					</p>
					<p>
						Dolores voluptas omnis et cupiditate ducimus delectus vel. Voluptas
						atque cumque incidunt quia. A praesentium neque quis odit totam
						praesentium illum est. Ut doloribus quisquam ut. Incidunt vel
						suscipit accusamus consequuntur repellendus dolor sunt. Vel
						accusamus nesciunt perspiciatis sunt est.
					</p>
					<p>
						Tempore quis voluptas aut voluptatem praesentium nisi. Qui et quo ut
						et vel dolores facilis dignissimos. Omnis facere quisquam recusandae
						accusantium. Sit ut consectetur non id velit est odio. Laboriosam
						soluta tenetur asperiores. Excepturi reprehenderit rerum sint
						tempore molestiae vitae aliquid. Ea est sunt at atque ducimus
						doloribus quas sit.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button block size="large">
						Submit
					</Button>
					<Spacer size="xxs" />
					<Button block size="large" onClick={handleClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

const DangerTemplate: StoryFn<ModalProps> = (args) => {
	const [open, setOpen] = useState(false);

	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={() => setOpen(true)}>Open modal</Button>
			<Modal {...args} open={open} onClose={handleClose}>
				<Modal.Header>Lorem ipsum</Modal.Header>
				<Modal.Body>
					<p>
						Laboriosam autem non et nisi. Ut voluptatem sit beatae assumenda
						amet aliquam corporis.
					</p>
					<p>
						Dolores voluptas omnis et cupiditate ducimus delectus vel. Voluptas
						atque cumque incidunt quia. A praesentium neque quis odit totam
						praesentium illum est. Ut doloribus quisquam ut. Incidunt vel
						suscipit accusamus consequuntur repellendus dolor sunt. Vel
						accusamus nesciunt perspiciatis sunt est.
					</p>
					<p>
						Tempore quis voluptas aut voluptatem praesentium nisi. Qui et quo ut
						et vel dolores facilis dignissimos. Omnis facere quisquam recusandae
						accusantium. Sit ut consectetur non id velit est odio. Laboriosam
						soluta tenetur asperiores. Excepturi reprehenderit rerum sint
						tempore molestiae vitae aliquid. Ea est sunt at atque ducimus
						doloribus quas sit.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button block size="large" onClick={handleClose}>
						Cancel
					</Button>
					<Spacer size="xxs" />
					<Button block variant="danger" size="large">
						Submit
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

const EndAlignedFooterTemplate: StoryFn<StoryProps> = ({
	footerAlignment,
}: StoryProps) => {
	const [open, setOpen] = useState(false);

	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={() => setOpen(true)}>Open modal</Button>
			<Modal open={open} onClose={handleClose}>
				<Modal.Header>Lorem ipsum</Modal.Header>
				<Modal.Body>
					<p>
						Laboriosam autem non et nisi. Ut voluptatem sit beatae assumenda
						amet aliquam corporis.
					</p>
					<p>
						Dolores voluptas omnis et cupiditate ducimus delectus vel. Voluptas
						atque cumque incidunt quia. A praesentium neque quis odit totam
						praesentium illum est. Ut doloribus quisquam ut. Incidunt vel
						suscipit accusamus consequuntur repellendus dolor sunt. Vel
						accusamus nesciunt perspiciatis sunt est.
					</p>
					<p>
						Tempore quis voluptas aut voluptatem praesentium nisi. Qui et quo ut
						et vel dolores facilis dignissimos. Omnis facere quisquam recusandae
						accusantium. Sit ut consectetur non id velit est odio. Laboriosam
						soluta tenetur asperiores. Excepturi reprehenderit rerum sint
						tempore molestiae vitae aliquid. Ea est sunt at atque ducimus
						doloribus quas sit.
					</p>
				</Modal.Body>
				<Modal.Footer alignment={footerAlignment}>
					<Button>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

const InitialFocusTemplate: StoryFn<ModalProps> = (args) => {
	const [open, setOpen] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={() => setOpen(true)}>Open modal</Button>
			<Modal
				{...args}
				open={open}
				onClose={handleClose}
				initialFocus={inputRef}
			>
				<Modal.Header>Modal with Initial Focus</Modal.Header>
				<Modal.Body>
					<p>
						This modal demonstrates initial focus on the input field. When the
						modal opens, focus will be set to the input field instead of the
						default close button.
					</p>
					<FormControl
						ref={inputRef}
						id="modal-fullname-input"
						type="text"
						placeholder="Your full name"
						componentClass="input"
						aria-label="Full name"
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button block size="large" variant="primary">
						Submit
					</Button>
					<Spacer size="xxs" />
					<Button block size="large" onClick={handleClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export const Default: Story = {
	render: DefaultTemplate,
};

export const Large: Story = {
	render: DefaultTemplate,
	args: {
		size: "large",
	},
};

export const ExtraLarge: Story = {
	render: DefaultTemplate,
	args: {
		size: "xLarge",
	},
};

export const Danger: Story = {
	render: DangerTemplate,
	args: {
		variant: "danger",
	},
};

export const WithoutCloseButton: Story = {
	render: DefaultTemplate,
	args: {
		showCloseButton: false,
	},
};

export const LeftAlignedBody: Story = {
	render: DefaultTemplate,
	args: {
		bodyAlignment: "left",
	},
};

export const StartAlignedBody: Story = {
	render: DefaultTemplate,
	args: {
		bodyAlignment: "start",
	},
};

export const EndAlignedFooter: Story = {
	render: EndAlignedFooterTemplate,
	args: {
		footerAlignment: "end",
	},
};

export const WithInitialFocus: Story = {
	render: InitialFocusTemplate,
	args: {},
	parameters: {
		docs: {
			description: {
				story:
					"This example demonstrates the `initialFocus` prop. When the modal opens, focus will be set to the input field instead of the default close button. This is useful for forms or other scenarios where you want to direct the user's attention to a specific element immediately.",
			},
		},
	},
};

export default story;
