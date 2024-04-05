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
}

interface DropDownButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
}

interface DropDownContextProps {
	dropup?: boolean;
	menuButtonRef: React.MutableRefObject<HTMLButtonElement | null>;
}

const DropDownContext = createContext<DropDownContextProps>({
	menuButtonRef: React.createRef(),
});

const dropDownItems =
	"list-none bg-foreground-secondary text-center border-1 border-solid border-background-quaternary focus:outline-transparent origin-top-right absolute w-full min-w-max py-1 px-0 z-10";
const dropUpItems = dropDownItems + " transform -translate-y-full top-0";
const toggleClassNames =
	"cursor-pointer border-3 border-solid w-full block text-center touch-manipulation bg-background-quaternary text-foreground-secondary px-3 py-1.5 relative hover:bg-foreground-secondary hover:text-background-secondary btn-block border-foreground-secondary";

export const MenuItems = React.forwardRef<HTMLDivElement, MenuItemsProps>(
	({ children, className }, ref): JSX.Element => {
		const { dropup, menuButtonRef } = useContext(DropDownContext);

		const handleClick = () => {
			menuButtonRef.current?.focus();
		};

		const itemsClasses = dropup ? dropUpItems : dropDownItems;
		const buttonClass: string = [className, itemsClasses].join(" ");
		return (
			<Menu.Items className={buttonClass} ref={ref} onClick={handleClick}>
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
	const { dropup, menuButtonRef } = useContext(DropDownContext);

	const classes = [className, toggleClassNames].join(" ");
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
}: DropdownProps): JSX.Element => {
	const menuButtonRef = useRef(null);
	const context = { dropup, menuButtonRef };
	return (
		<DropDownContext.Provider value={context}>
			<Menu className="relative w-full" as="div" id={id}>
				{children}
			</Menu>
		</DropDownContext.Provider>
	);
};

Dropdown.Menu = MenuItems;
Dropdown.Toggle = DropDownButton;

MenuItems.displayName = "MenuItems";
Dropdown.displayName = "Dropdown";
