import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useRef,
	useEffect,
} from "react";

type AccordionContextType = {
	openItems: Set<string>;
	toggleItem: (id: string) => void;
	isOpen: (id: string) => boolean;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
	undefined,
);

type AccordionProps = {
	children: React.ReactNode;
	allowMultiple?: boolean;
};

/**
 * Accordion component for displaying collapsible content panels.
 * The `Accordion` component provides context for its subcomponents (`Accordion.Item`, `Accordion.Header`, and `Accordion.Body`)
 * to create accessible, interactive accordion UIs. It manages the open/closed state of items and supports both single and multiple
 * item expansion via the `allowMultiple` prop.
 */
export const Accordion = ({
	children,
	allowMultiple = false,
}: AccordionProps) => {
	const [openItems, setOpenItems] = useState<Set<string>>(new Set());

	const toggleItem = (id: string) => {
		setOpenItems((prev) => {
			const next = new Set(prev);
			if (next.has(id)) {
				next.delete(id);
			} else {
				if (!allowMultiple) next.clear();
				next.add(id);
			}
			return next;
		});
	};

	const isOpen = (id: string) => openItems.has(id);

	return (
		<AccordionContext.Provider value={{ openItems, toggleItem, isOpen }}>
			<div className="text-foreground-secondary">{children}</div>
		</AccordionContext.Provider>
	);
};

// Subcomponents
type ItemProps = {
	id: string;
	children: ReactNode;
};

const Item = ({ id, children }: ItemProps) => {
	return (
		<div className="accordion-item" data-id={id}>
			{children}
		</div>
	);
};

type HeaderProps = {
	id: string;
	children: ReactNode;
};

const Header = ({ id, children }: HeaderProps) => {
	const context = useAccordionContext();
	const ref = useRef<HTMLButtonElement>(null);
	const isOpen = context.isOpen(id);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			context.toggleItem(id);
		}
		if (e.key === "ArrowDown" || e.key === "ArrowUp") {
			e.preventDefault();
			const direction = e.key === "ArrowDown" ? 1 : -1;
			const allHeaders = document.querySelectorAll(
				'[type="button"][data-accordion-header]',
			);
			const currentIndex = Array.from(allHeaders).indexOf(e.currentTarget);
			const nextIndex =
				(currentIndex + direction + allHeaders.length) % allHeaders.length;
			(allHeaders[nextIndex] as HTMLElement).focus();
		}
	};

	return (
		<button
			type="button"
			className="w-full h-[3.5em] border-[3px] mb-[0.5em] bg-background-secondary"
			ref={ref}
			id={`accordion-header-${id}`}
			tabIndex={0}
			data-accordion-header
			aria-expanded={isOpen}
			aria-controls={`accordion-body-${id}`}
			onClick={() => context.toggleItem(id)}
			onKeyDown={handleKeyDown}
		>
			<div className="flex items-center justify-between pr-3 pl-3">
				<div>{children}</div>
				<div>
					<FontAwesomeIcon
						icon={!context.isOpen(id) ? faChevronDown : faChevronUp}
					/>
				</div>
			</div>
		</button>
	);
};

type BodyProps = {
	id: string;
	children: ReactNode;
};

const Body = ({ id, children }: BodyProps) => {
	const context = useAccordionContext();
	const ref = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState("0px");

	const isOpen = context.isOpen(id);

	useEffect(() => {
		if (ref.current) {
			if (isOpen) {
				const scrollHeight = ref.current.scrollHeight;
				setHeight(`${scrollHeight}px`);
			} else {
				setHeight("0px");
			}
		}
	}, [isOpen]);

	return (
		<div
			className="mb-[0.5em]"
			id={`accordion-body-${id}`}
			ref={ref}
			role="region"
			aria-labelledby={`accordion-header-${id}`}
			aria-hidden={!isOpen}
			style={{
				overflow: "hidden",
				transition: "max-height 0.3s ease",
				maxHeight: height,
			}}
		>
			{children}
		</div>
	);
};

// Hook to access context
function useAccordionContext() {
	const context = useContext(AccordionContext);
	if (!context) {
		throw new Error("Accordion subcomponents must be used within an Accordion");
	}
	return context;
}

// Attach subcomponents to main Accordion
Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Body = Body;
