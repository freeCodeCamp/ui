import React from "react";
import { render, screen } from "@testing-library/react";

import { Callout } from "./callout";

describe("<Callout />", () => {
	it("should render children correctly", () => {
		render(<Callout variant="info">Hello World</Callout>);

		expect(screen.getByText("Hello World")).toBeInTheDocument();
	});
});

// ------------------------------
// Type tests
// ------------------------------

// @ts-expect-error - Callout does not accept `role`
<Callout variant="success" role="alert">
	Hello World
</Callout>;

// @ts-expect-error - Callout does not accept `role`
<Callout variant="info" role="alert">
	Hello World
</Callout>;

// @ts-expect-error - Callout does not accept `role`
<Callout variant="warning" role="alert">
	Hello World
</Callout>;

// @ts-expect-error - Callout does not accept `role`
<Callout variant="danger" role="alert">
	Hello World
</Callout>;
