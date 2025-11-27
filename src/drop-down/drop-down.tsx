import React, { createContext, useContext, useRef } from "react";
import { Menu } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

interface MenuItemsProps {
	children: React.ReactNode;
	className?: string;
}

export interface DropdownProps {
	children: React.ReactNode;
	dropup?: boolean;
	id?: string;
	block?: boolean;
}

interface DropDownButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	block?: boolean;
}

interface DropDownContextProps {
	dropup?: boolean;
	menuButtonRef: React.MutableRefObject<HTMLButtonElement | null>;
	block?: boolean;
}

const DropDownContext = createContext<DropDownContextProps>({
	menuButtonRef: React.createRef(),
	block: false,
});

const dropDownItems =
	"list-none bg-background-primary text-center border-1 border-solid border-foreground-primary focus:outline-transparent origin-top-right absolute min-w-max py-1 px-0 z-10";
const dropUpItems = dropDownItems + " transform -translate-y-full top-0";
const baseToggleClassNames =
	"cursor-pointer border-3 border-solid flex items-center justify-center text-center touch-manipulation bg-background-quaternary text-foreground-secondary px-3 py-1.5 mt-[0.5px] relative hover:bg-foreground-secondary hover:text-background-secondary border-foreground-secondary";

export const MenuItems = React.forwardRef<HTMLDivElement, MenuItemsProps>(
	({ children, className }, ref): JSX.Element => {
		const { dropup, menuButtonRef, block } = useContext(DropDownContext);

		const handleClick = () => {
			menuButtonRef.current?.focus();
		};

		const itemsClasses = dropup ? dropUpItems : dropDownItems;
		const menuClass: string = [className, itemsClasses, block ? "w-full" : ""]
			.join(" ")
			.trim();
		return (
			<Menu.Items className={menuClass} ref={ref} onClick={handleClick}>
				{children}
			</Menu.Items>
		);
	},
);

const DropDownButton = ({
	children,
	className,
	...rest
}: DropDownButtonProps): JSX.Element => {
	const { dropup, menuButtonRef, block } = useContext(DropDownContext);

	const classes = [className, baseToggleClassNames, block ? "block w-full" : ""]
		.join(" ")
		.trim();

	return (
		<Menu.Button ref={menuButtonRef} className={classes} {...rest}>
			{children}
			<FontAwesomeIcon
				icon={dropup ? faCaretUp : faCaretDown}
				className="mx-2 h-3"
				aria-hidden="true"
			/>
		</Menu.Button>
	);
};

export const Dropdown = ({
	children,
	id,
	dropup,
	block = false,
}: DropdownProps): JSX.Element => {
	const menuButtonRef = useRef(null);
	const context = { dropup, menuButtonRef, block };
	return (
		<DropDownContext.Provider value={context}>
			<Menu className="relative" as="div" id={id}>
				{children}
			</Menu>
		</DropDownContext.Provider>
	);
};

Dropdown.Menu = MenuItems;
Dropdown.Toggle = DropDownButton;

MenuItems.displayName = "MenuItems";
Dropdown.displayName = "Dropdown";
