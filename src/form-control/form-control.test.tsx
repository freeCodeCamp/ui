import React from "react";
import { render, screen } from "@testing-library/react";

import { FormGroup } from "../form-group";
import { FormControl } from ".";

describe("<FormControl />", () => {
	it("should render correctly", () => {
		render(<FormControl aria-label="test" />);
		expect(screen.getByLabelText("test")).toBeInTheDocument();
	});

	it("should use `id` over `controlId` if both are specified", () => {
		render(
			<FormGroup controlId="foo">
				<FormControl id="bar" />
			</FormGroup>,
		);

		const input = screen.getByRole("textbox");

		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("id", "bar");
	});

	it("should forward refs to the input element", () => {
		const ref = React.createRef<HTMLInputElement>();
		render(<FormControl ref={ref} aria-label="test input" />);

		expect(ref.current).toBeInstanceOf(HTMLInputElement);
		expect(ref.current).toBe(screen.getByLabelText("test input"));
	});

	it("should forward refs to the textarea element", () => {
		const ref = React.createRef<HTMLTextAreaElement>();
		render(
			<FormControl
				componentClass="textarea"
				ref={ref}
				aria-label="test textarea"
			/>,
		);

		expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
		expect(ref.current).toBe(screen.getByLabelText("test textarea"));
	});
});

describe("<FormControl.Static />", () => {
	it("should render correctly", () => {
		render(<FormControl.Static aria-label="test" />);
		expect(screen.getByLabelText("test")).toBeInTheDocument();
	});
});

describe("<FormControl.Feedback />", () => {
	it("should render correctly", () => {
		render(<FormControl.Feedback aria-label="test" />);
		expect(screen.getByLabelText("test")).toBeInTheDocument();
	});
});
