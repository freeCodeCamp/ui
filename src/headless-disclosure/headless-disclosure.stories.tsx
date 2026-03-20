import React from "react";
import preview from "#.storybook/preview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { HeadlessDisclosure } from ".";

const meta = preview.meta({
	title: "Components/HeadlessDisclosure",
	component: HeadlessDisclosure,
	tags: ["autodocs"],
});

const renderDisclosure = (args: { defaultOpen?: boolean }) => (
	<HeadlessDisclosure {...args}>
		{({ open }) => (
			<>
				<HeadlessDisclosure.Button className="text-foreground-primary">
					{open ? "Collapse" : "Expand"}

					<FontAwesomeIcon
						icon={open ? faChevronUp : faChevronDown}
						className="ml-2"
						aria-hidden="true"
					/>
				</HeadlessDisclosure.Button>
				<HeadlessDisclosure.Panel className="text-foreground-primary">
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

export const Default = meta.story({
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
});

export const DefaultOpen = meta.story({
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
});

export default meta;
