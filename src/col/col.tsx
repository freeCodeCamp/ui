import React from "react";

import { ColProps } from "./types";

const ExtraSmallClasses = {
	1: "w-1/12",
	2: "w-1/6",
	3: "w-1/4",
	4: "w-1/3",
	5: "w-5/12",
	6: "w-1/2",
	7: "w-7/12",
	8: "w-2/3",
	9: "w-3/4",
	10: "w-5/6",
	11: "w-11/12",
	12: "w-full",
};

const ExtraSmallOffsetClasses = {
	1: "ml-[8.3%]",
	2: "ml-[16.6%]",
	3: "ml-[25%]",
	4: "ml-[33.3%]",
	5: "ml-[41.7%]",
	6: "ml-[50%]",
	7: "ml-[58.3%]",
	8: "ml-[66.7%]",
	9: "ml-[75%]",
	10: "ml-[83.3%]",
	11: "ml-[91.7%]",
	12: "ml-[100%]",
};

const SmallClasses = {
	1: "md:w-1/12",
	2: "md:w-1/6",
	3: "md:w-1/4",
	4: "md:w-1/3",
	5: "md:w-5/12",
	6: "md:w-1/2",
	7: "md:w-7/12",
	8: "md:w-2/3",
	9: "md:w-3/4",
	10: "md:w-5/6",
	11: "md:w-11/12",
	12: "md:w-full",
};

const SmallOffsetClasses = {
	1: "md:ml-[8.3%]",
	2: "md:ml-[16.6%]",
	3: "md:ml-[25%]",
	4: "md:ml-[33.3%]",
	5: "md:ml-[41.7%]",
	6: "md:ml-[50%]",
	7: "md:ml-[58.3%]",
	8: "md:ml-[66.7%]",
	9: "md:ml-[75%]",
	10: "md:ml-[83.3%]",
	11: "md:ml-[91.7%]",
	12: "md:ml-[100%]",
};

const MediumClasses = {
	1: "min-[992px]:w-1/12",
	2: "min-[992px]:w-1/6",
	3: "min-[992px]:w-1/4",
	4: "min-[992px]:w-1/3",
	5: "min-[992px]:w-5/12",
	6: "min-[992px]:w-1/2",
	7: "min-[992px]:w-7/12",
	8: "min-[992px]:w-2/3",
	9: "min-[992px]:w-3/4",
	10: "min-[992px]:w-5/6",
	11: "min-[992px]:w-11/12",
	12: "min-[992px]:w-full",
};

const MediumOffsetClasses = {
	1: "min-[992px]:ml-[8.3%]",
	2: "min-[992px]:ml-[16.6%]",
	3: "min-[992px]:ml-[25%]",
	4: "min-[992px]:ml-[33.3%]",
	5: "min-[992px]:ml-[41.7%]",
	6: "min-[992px]:ml-[50%]",
	7: "min-[992px]:ml-[58.3%]",
	8: "min-[992px]:ml-[66.7%]",
	9: "min-[992px]:ml-[75%]",
	10: "min-[992px]:ml-[83.3%]",
	11: "min-[992px]:ml-[91.7%]",
	12: "min-[992px]:ml-[100%]",
};

const LargeClasses = {
	1: "min-[1200px]:w-1/12",
	2: "min-[1200px]:w-1/6",
	3: "min-[1200px]:w-1/4",
	4: "min-[1200px]:w-1/3",
	5: "min-[1200px]:w-5/12",
	6: "min-[1200px]:w-1/2",
	7: "min-[1200px]:w-7/12",
	8: "min-[1200px]:w-2/3",
	9: "min-[1200px]:w-3/4",
	10: "min-[1200px]:w-5/6",
	11: "min-[1200px]:w-11/12",
	12: "min-[1200px]:w-full",
};

const LargeOffsetClasses = {
	0: "min-[1200px]:ml-0",
	1: "min-[1200px]:ml-[8.3%]",
	2: "min-[1200px]:ml-[16.6%]",
	3: "min-[1200px]:ml-[25%]",
	4: "min-[1200px]:ml-[33.3%]",
	5: "min-[1200px]:ml-[41.7%]",
	6: "min-[1200px]:ml-[50%]",
	7: "min-[1200px]:ml-[58.3%]",
	8: "min-[1200px]:ml-[66.7%]",
	9: "min-[1200px]:ml-[75%]",
	10: "min-[1200px]:ml-[83.3%]",
	11: "min-[1200px]:ml-[91.7%]",
	12: "min-[1200px]:ml-[100%]",
};

export const Col = ({
	className,
	children,
	xs,
	sm,
	md,
	lg,
	xsOffset,
	smOffset,
	mdOffset,
	lgOffset,
	...props
}: ColProps) => {
	const xsClass = xs ? ExtraSmallClasses[xs] : "";
	const xsOffsetClass = xsOffset ? ExtraSmallOffsetClasses[xsOffset] : "";
	const smClass = sm ? SmallClasses[sm] : "";
	const smOffsetClass = smOffset ? SmallOffsetClasses[smOffset] : "";
	const mdClass = md ? MediumClasses[md] : "";
	const mdOffsetClass = mdOffset ? MediumOffsetClasses[mdOffset] : "";
	const lgClass = lg ? LargeClasses[lg] : "";
	// we have to check condiontionally against undefined, because "lgOffset ?" clear the 0 value, maybe refactor LargeOffsetClasses[0] later to something isn't 0.
	const lgOffsetClass =
		lgOffset !== undefined ? LargeOffsetClasses[lgOffset] : "";

	return (
		<div
			className={`${
				className ?? ""
			} min-h-[1px] px-[15px] ${xsClass} ${smClass} ${mdClass} ${lgClass} ${xsOffsetClass} ${smOffsetClass} ${mdOffsetClass} ${lgOffsetClass} `}
			{...props}
		>
			{children}
		</div>
	);
};
