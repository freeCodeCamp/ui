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
	1: "ms-[8.3%]",
	2: "ms-[16.6%]",
	3: "ms-[25%]",
	4: "ms-[33.3%]",
	5: "ms-[41.7%]",
	6: "ms-[50%]",
	7: "ms-[58.3%]",
	8: "ms-[66.7%]",
	9: "ms-[75%]",
	10: "ms-[83.3%]",
	11: "ms-[91.7%]",
	12: "ms-[100%]",
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
	1: "md:ms-[8.3%]",
	2: "md:ms-[16.6%]",
	3: "md:ms-[25%]",
	4: "md:ms-[33.3%]",
	5: "md:ms-[41.7%]",
	6: "md:ms-[50%]",
	7: "md:ms-[58.3%]",
	8: "md:ms-[66.7%]",
	9: "md:ms-[75%]",
	10: "md:ms-[83.3%]",
	11: "md:ms-[91.7%]",
	12: "md:ms-[100%]",
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
	1: "min-[992px]:ms-[8.3%]",
	2: "min-[992px]:ms-[16.6%]",
	3: "min-[992px]:ms-[25%]",
	4: "min-[992px]:ms-[33.3%]",
	5: "min-[992px]:ms-[41.7%]",
	6: "min-[992px]:ms-[50%]",
	7: "min-[992px]:ms-[58.3%]",
	8: "min-[992px]:ms-[66.7%]",
	9: "min-[992px]:ms-[75%]",
	10: "min-[992px]:ms-[83.3%]",
	11: "min-[992px]:ms-[91.7%]",
	12: "min-[992px]:ms-[100%]",
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
	0: "min-[1200px]:ms-0",
	1: "min-[1200px]:ms-[8.3%]",
	2: "min-[1200px]:ms-[16.6%]",
	3: "min-[1200px]:ms-[25%]",
	4: "min-[1200px]:ms-[33.3%]",
	5: "min-[1200px]:ms-[41.7%]",
	6: "min-[1200px]:ms-[50%]",
	7: "min-[1200px]:ms-[58.3%]",
	8: "min-[1200px]:ms-[66.7%]",
	9: "min-[1200px]:ms-[75%]",
	10: "min-[1200px]:ms-[83.3%]",
	11: "min-[1200px]:ms-[91.7%]",
	12: "min-[1200px]:ms-[100%]",
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
