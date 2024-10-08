interface PrismFormattedBaseProps {
	className?: string;
	text: string;
	getCodeBlockAriaLabel: (codeName: string) => string;
	useSpan?: boolean;
	noAria?: boolean;
	hasLineNumbers?: boolean;
}

type PrismFormattedDisclosure =
	| {
			isCollapsible?: false;
			disclosureLabel?: never;
	  }
	| {
			isCollapsible: true;
			disclosureLabel: string;
	  };

export type PrismFormattedProps = PrismFormattedBaseProps &
	PrismFormattedDisclosure;
