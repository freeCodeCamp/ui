import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { Button } from "../button";
import { Modal } from "./modal";
import { type ModalProps, type HeaderProps } from "./types";

const originalWindow = window;

describe("<Modal />", () => {
	beforeAll(() => {
		// The Modal component uses `ResizeObserver` under the hood.
		// However, this property is not available in JSDOM, so we need to manually add it to the window object.
		// Ref: https://github.com/jsdom/jsdom/issues/3368
		Object.defineProperty(window, "ResizeObserver", {
			writable: true,
			value: vi.fn(function () {
				return {
					observe: vi.fn(),
					unobserve: vi.fn(),
					disconnect: vi.fn(),
				};
			}),
		});
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	afterAll(() => {
		Object.defineProperty(globalThis, "window", {
			value: originalWindow,
		});
	});

	const setup = ({
		showCloseButton,
		open = false,
		onClose = () => {},
		...modalProps
	}: Partial<ModalProps & HeaderProps>) => {
		render(
			<Modal {...modalProps} open={open} onClose={onClose}>
				<Modal.Header showCloseButton={showCloseButton}>
					Lorem ipsum
				</Modal.Header>
				<Modal.Body>
					<p>Laboriosam autem non et nisi.</p>
				</Modal.Body>
				<Modal.Footer>
					<Button block size="large">
						Submit
					</Button>
					<Button block size="large">
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>,
		);
	};

	it("should not appear if `open` is `false`", () => {
		setup({ open: false });

		expect(
			screen.queryByRole("dialog", { name: "Lorem ipsum" }),
		).not.toBeInTheDocument();
	});

	it("should appear and render the content properly if `open` is `true`", async () => {
		setup({ open: true });

		const dialog = await screen.findByRole("dialog", { name: "Lorem ipsum" });
		expect(dialog).toBeInTheDocument();

		expect(
			within(dialog).getByRole("heading", { level: 2 }),
		).toBeInTheDocument();
		expect(
			within(dialog).getByRole("button", { name: "Close" }),
		).toBeInTheDocument();
		expect(
			within(dialog).getByText("Laboriosam autem non et nisi."),
		).toBeInTheDocument();
		expect(
			within(dialog).getByRole("button", { name: "Submit" }),
		).toBeInTheDocument();
		expect(
			within(dialog).getByRole("button", { name: "Cancel" }),
		).toBeInTheDocument();
	});

	it("should hide the close button if `showCloseButton` is `false`", async () => {
		setup({ open: true, showCloseButton: false });

		const dialog = await screen.findByRole("dialog", { name: "Lorem ipsum" });
		expect(dialog).toBeInTheDocument();

		expect(
			within(dialog).getByRole("heading", { level: 2 }),
		).toBeInTheDocument();
		expect(
			within(dialog).queryByRole("button", { name: "Close" }),
		).not.toBeInTheDocument();
		expect(
			within(dialog).getByText("Laboriosam autem non et nisi."),
		).toBeInTheDocument();
		expect(
			within(dialog).getByRole("button", { name: "Submit" }),
		).toBeInTheDocument();
		expect(
			within(dialog).getByRole("button", { name: "Cancel" }),
		).toBeInTheDocument();
	});

	it("should automatically focus on the close button when open", async () => {
		setup({ open: true });

		const dialog = await screen.findByRole("dialog", { name: "Lorem ipsum" });
		expect(dialog).toBeInTheDocument();

		const closeButton = within(dialog).getByRole("button", { name: "Close" });
		expect(closeButton).toHaveFocus();
	});

	it("should automatically focus on the first focusable element if `showCloseButton` is `false`", async () => {
		setup({ open: true, showCloseButton: false });

		const dialog = await screen.findByRole("dialog", { name: "Lorem ipsum" });
		expect(dialog).toBeInTheDocument();

		const submitButton = within(dialog).getByRole("button", { name: "Submit" });
		expect(submitButton).toHaveFocus();
	});

	it("should trigger the `onClose` prop on close button click", async () => {
		const onClose = vi.fn();

		setup({ open: true, onClose });

		const dialog = await screen.findByRole("dialog", { name: "Lorem ipsum" });
		expect(dialog).toBeInTheDocument();

		const closeButton = within(dialog).getByRole("button", { name: "Close" });
		await userEvent.click(closeButton);

		expect(onClose).toHaveBeenCalledTimes(1);
	});

	it("should trigger the `onClose` prop on Escape key press", async () => {
		const onClose = vi.fn();

		setup({ open: true, onClose });

		const dialog = await screen.findByRole("dialog", { name: "Lorem ipsum" });
		expect(dialog).toBeInTheDocument();

		await userEvent.keyboard("{Escape}");

		expect(onClose).toHaveBeenCalledTimes(1);
	});

	it("should focus on the specified element when `initialFocus` is provided", async () => {
		const initialFocusRef = React.createRef<HTMLButtonElement>();

		render(
			<Modal open={true} onClose={() => {}} initialFocus={initialFocusRef}>
				<Modal.Header>Lorem ipsum</Modal.Header>
				<Modal.Body>
					<p>Laboriosam autem non et nisi.</p>
				</Modal.Body>
				<Modal.Footer>
					<Button ref={initialFocusRef} block size="large">
						Custom Focus Button
					</Button>
					<Button block size="large">
						Submit
					</Button>
					<Button block size="large">
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>,
		);

		const dialog = await screen.findByRole("dialog", { name: "Lorem ipsum" });
		expect(dialog).toBeInTheDocument();

		const customFocusButton = within(dialog).getByRole("button", {
			name: "Custom Focus Button",
		});
		expect(customFocusButton).toHaveFocus();
	});

	it("should focus on the close button when `initialFocus` is undefined", async () => {
		setup({ open: true });

		const dialog = await screen.findByRole("dialog", { name: "Lorem ipsum" });
		expect(dialog).toBeInTheDocument();

		const closeButton = within(dialog).getByRole("button", { name: "Close" });
		expect(closeButton).toHaveFocus();
	});
});
