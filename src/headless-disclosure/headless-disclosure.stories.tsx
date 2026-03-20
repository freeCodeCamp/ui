import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { HeadlessDisclosure } from ".";

const story = {
	title: "Components/HeadlessDisclosure",
	component: HeadlessDisclosure,
} satisfies Meta<typeof HeadlessDisclosure>;

type Story = StoryObj<typeof HeadlessDisclosure>;

const renderDisclosure = (args: { defaultOpen?: boolean }) => (
	<HeadlessDisclosure {...args}>
		{({ open }) => (
			<>
				<HeadlessDisclosure.Button>
					{open ? "Collapse" : "Expand"}
					<FontAwesomeIcon
						icon={open ? faChevronUp : faChevronDown}
						className="ml-2"
						aria-hidden="true"
					/>
				</HeadlessDisclosure.Button>
				<HeadlessDisclosure.Panel>
					<p>This is the disclosure panel content.</p>
				</HeadlessDisclosure.Panel>
			</>
		)}
	</HeadlessDisclosure>
);

const sourceCode = (
	defaultOpen: boolean,
) => `<HeadlessDisclosure${defaultOpen ? " defaultOpen" : ""}>
  {({ open }) => (
    <>
      <HeadlessDisclosure.Button>
        {open ? "Collapse" : "Expand"}
        <FontAwesomeIcon
          icon={open ? faChevronUp : faChevronDown}
          className="ml-2"
          aria-hidden="true"
        />
      </HeadlessDisclosure.Button>
      <HeadlessDisclosure.Panel>
        <p>This is the disclosure panel content.</p>
      </HeadlessDisclosure.Panel>
    </>
  )}
</HeadlessDisclosure>`;

export const Default: Story = {
	args: {
		defaultOpen: false,
	},
	render: (args) => renderDisclosure(args),
	parameters: {
		docs: {
			source: {
				code: sourceCode(false),
				language: "tsx",
			},
		},
	},
};

export const DefaultOpen: Story = {
	args: {
		defaultOpen: true,
	},
	render: (args) => renderDisclosure(args),
	parameters: {
		docs: {
			source: {
				code: sourceCode(true),
				language: "tsx",
			},
		},
	},
};

export default story;
