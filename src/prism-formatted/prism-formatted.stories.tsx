import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { PrismFormatted } from "./prism-formatted";

const story = {
	title: "Components/PrismFormatted",
	component: PrismFormatted,
} satisfies Meta<typeof PrismFormatted>;

type Story = StoryObj<typeof PrismFormatted>;

const text = `<p>Given the following code:</p>
<pre><code class="language-python">temp = "5 degrees"
cel = 0
fahr = float(temp)
cel = (fahr - 32.0) * 5.0 / 9.0
print(cel)
</code></pre>
<p>Which line/lines should be surrounded by <code>try</code> block?</p>`;

export const Default: Story = {
	args: {
		text,
		getCodeBlockAriaLabel: (codeName) => `${codeName} code example`,
	},
	parameters: {
		docs: {
			source: {
				code: `<PrismFormatted
  getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`}
  text="<p>Given the following code:</p>
	<pre><code class=&quot;language-python&quot;>temp = &quot;5 degrees&quot;
	cel = 0
	fahr = float(temp)
	cel = (fahr - 32.0) * 5.0 / 9.0
	print(cel)
	</code></pre>
	<p>Which line/lines should be surrounded by <code>try</code> block?</p>"
/>`,
			},
		},
	},
};

export const WithLineNumbers: Story = {
	args: {
		text,
		getCodeBlockAriaLabel: (codeName) => `${codeName} code example`,
		hasLineNumbers: true,
	},
	parameters: {
		docs: {
			source: {
				code: `<PrismFormatted
  hasLineNumbers
  getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`}
  text="<p>Given the following code:</p>
	<pre><code class=&quot;language-python&quot;>temp = &quot;5 degrees&quot;
	cel = 0
	fahr = float(temp)
	cel = (fahr - 32.0) * 5.0 / 9.0
	print(cel)
	</code></pre>
	<p>Which line/lines should be surrounded by <code>try</code> block?</p>"
/>`,
			},
		},
	},
};

export const WithLongLineOfCode: Story = {
	args: {
		text: `<pre><code class="language-html"><p>This story shows how PrismFormatted displays a long line of code. This line should not wrap to a new line, but instead, the overflow content is clipped and can be scrolled into view.</p></code></pre>`,
		getCodeBlockAriaLabel: (codeName) => `${codeName} code example`,
	},
	parameters: {
		docs: {
			source: {
				code: `<PrismFormatted
  getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`}
  text={\`<pre><code class="language-html"><p>This story shows how PrismFormatted displays a long line of code. This line should not wrap to a new line, but instead, the overflow content is clipped and can be scrolled into view.</p></code></pre>\`}
/>`,
			},
		},
	},
};

export const InsideDisclosureElement: Story = {
	decorators: [
		(Story) => (
			<details>
				<summary>Example code</summary>
				<Story />
			</details>
		),
	],
	args: {
		text: `<pre><code class="language-html"><p>This story shows how PrismFormatted displays a long line of code when it's rendered inside a disclosure element. This line should not wrap to a new line, but instead, the overflow content is clipped and can be scrolled into view.</p></code></pre>`,
		getCodeBlockAriaLabel: (codeName) => `${codeName} code example`,
	},
	parameters: {
		docs: {
			source: {
				code: `<details>
  <summary>Example code</summary>

  <PrismFormatted
    getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`}
    text={\`<pre><code class="language-html"><p>This story shows how PrismFormatted displays a long line of code when it's rendered inside a disclosure element. This line should not wrap to a new line, but instead, the overflow content is clipped and can be scrolled into view.</p></code></pre>\`}
	/>
</details>`,
			},
		},
	},
};

export default story;
