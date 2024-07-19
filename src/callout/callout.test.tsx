import React from "react";
import { render, screen } from "@testing-library/react";

import { Callout } from "./callout";

describe("<Callout />", () => {
	it("should render children correctly", () => {
		render(<Callout variant="info">Hello World</Callout>);

		expect(screen.getByText("Hello World")).toBeInTheDocument();
	});
});
