import React from "react";
import { render, screen } from "@testing-library/react";

import { Col } from ".";

describe("<Col />", () => {
	it("should change className when props are passed", () => {
		render(
			<Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
				Learn to code for free.
			</Col>,
		);
		expect(screen.getByText("Learn to code for free.")).toHaveClass(
			"min-h-[1px] px-[15px] w-full md:w-5/6 min-[1200px]:w-2/3 md:ml-[8.3%] min-[1200px]:ml-[16.6%]",
		);
	});
	it("should have lgOffSet 0 when it is passed to the component", () => {
		render(<Col lgOffset={0}>Learn to code for free.</Col>);
		expect(screen.getByText("Learn to code for free.")).toHaveClass(
			"min-h-[1px] px-[15px] min-[1200px]:ml-0",
		);
	});
	it("should add className to it", () => {
		render(
			<Col className="certificate-outer-wrapper">Learn to code for free.</Col>,
		);
		expect(screen.getByText("Learn to code for free.")).toHaveClass(
			"min-h-[1px] px-[15px] certificate-outer-wrapper",
		);
	});

	// Test new grid values
	it("should support new xs grid values", () => {
		const { rerender } = render(<Col xs={1}>Test content</Col>);
		expect(screen.getByText("Test content")).toHaveClass("w-1/12");

		rerender(<Col xs={3}>Test content</Col>);
		expect(screen.getByText("Test content")).toHaveClass("w-1/4");

		rerender(<Col xs={5}>Test content</Col>);
		expect(screen.getByText("Test content")).toHaveClass("w-5/12");
	});

	it("should support new lg grid values", () => {
		const { rerender } = render(<Col lg={1}>Test content</Col>);
		expect(screen.getByText("Test content")).toHaveClass("min-[1200px]:w-1/12");

		rerender(<Col lg={12}>Test content</Col>);
		expect(screen.getByText("Test content")).toHaveClass("min-[1200px]:w-full");
	});

	it("should support new offset values", () => {
		const { rerender } = render(<Col xsOffset={5}>Test content</Col>);
		expect(screen.getByText("Test content")).toHaveClass("ml-[41.7%]");

		rerender(<Col lgOffset={10}>Test content</Col>);
		expect(screen.getByText("Test content")).toHaveClass(
			"min-[1200px]:ml-[83.3%]",
		);
	});
});
