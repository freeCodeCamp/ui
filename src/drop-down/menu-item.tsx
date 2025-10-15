import { Menu } from "@headlessui/react";
import React, { type ComponentPropsWithoutRef } from "react";
import { type ButtonProps, HeadlessButton } from "../button";

export type MenuItemsProps = ComponentPropsWithoutRef<typeof Menu.Items> &
	ButtonProps;

const defaultClass =
	"block text-center no-underline border-none px-4 py-1.5 focus:bg-foreground-secondary focus:text-background-secondary hover:text-background-secondary hover:bg-foreground-secondary w-full";

export const MenuItem = ({
	children,
	className,
	...props
}: MenuItemsProps): JSX.Element => {
	return (
		<Menu.Item>
			{({ active }) => {
				const activeStyles = active
					? "text-background-secondary bg-foreground-secondary outline outline-3 outline-blue-500 outline-offset-[-3px]"
					: "text-foreground-secondary bg-background-primary";
				const classes = [defaultClass, className, activeStyles].join(" ");
				return (
					<HeadlessButton className={classes} {...props}>
						{children}
					</HeadlessButton>
				);
			}}
		</Menu.Item>
	);
};
