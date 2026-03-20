import React, { useState, useRef } from "react";
import preview from "#.storybook/preview";

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

type StoryProps = Omit<ModalProps, "children" | "open" | "onClose"> &
	Omit<HeaderProps, "children"> & {
		bodyAlignment?: BodyProps["alignment"];
		footerAlignment?: FooterProps["alignment"];
	};

const meta = preview.type<{ args: StoryProps }>().meta({
	title: "Components/Modal",
	tags: ["autodocs"],
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
});

const DefaultModalRender = ({
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

const DangerModalRender = (
	args: Omit<ModalProps, "children" | "open" | "onClose">,
) => {
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

const EndAlignedFooterRender = ({ footerAlignment }: StoryProps) => {
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

const InitialFocusRender = (
	args: Omit<ModalProps, "children" | "open" | "onClose">,
) => {
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

const LongContentRender = (
	args: Omit<ModalProps, "children" | "open" | "onClose">,
) => {
	const [open, setOpen] = React.useState(false);
	const handleClose = () => setOpen(false);
	return (
		<div>
			<Button onClick={() => setOpen(true)}>Open modal</Button>
			<Modal {...args} open={open} onClose={handleClose}>
				<Modal.Header>Modal with Long Content</Modal.Header>
				<Modal.Body>
					<div>
						{[...Array(30)].map((_, i) => (
							<p key={i}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Pellentesque euismod, nisi vel consectetur euismod, nisl nisi
								consectetur nisi, euismod euismod nisi nisi euismod.
							</p>
						))}
					</div>
				</Modal.Body>
				<Modal.Footer alignment="end">
					<Button onClick={handleClose}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export const Default = meta.story({
	render: DefaultModalRender,
});

export const Large = meta.story({
	render: DefaultModalRender,
	args: {
		size: "large",
	},
});

export const ExtraLarge = meta.story({
	render: DefaultModalRender,
	args: {
		size: "xLarge",
	},
});

export const Danger = meta.story({
	render: DangerModalRender,
	args: {
		variant: "danger",
	},
});

export const WithoutCloseButton = meta.story({
	render: DefaultModalRender,
	args: {
		showCloseButton: false,
	},
});

export const WithLongContent = meta.story({
	render: LongContentRender,
	args: {
		size: "medium",
		variant: "default",
	},
	parameters: {
		docs: {
			description: {
				story:
					"This story demonstrates the Modal component with enough content to trigger a vertical scrollbar.",
			},
		},
	},
});

export const LeftAlignedBody = meta.story({
	render: DefaultModalRender,
	args: {
		bodyAlignment: "left",
	},
});

export const StartAlignedBody = meta.story({
	render: DefaultModalRender,
	args: {
		bodyAlignment: "start",
	},
});

export const EndAlignedFooter = meta.story({
	render: EndAlignedFooterRender,
	args: {
		footerAlignment: "end",
	},
});

export const WithInitialFocus = meta.story({
	render: InitialFocusRender,
	args: {},
	parameters: {
		docs: {
			description: {
				story:
					"This example demonstrates the `initialFocus` prop. When the modal opens, focus will be set to the input field instead of the default close button. This is useful for forms or other scenarios where you want to direct the user's attention to a specific element immediately.",
			},
		},
	},
});

export default meta;
