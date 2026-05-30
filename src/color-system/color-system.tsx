import React from "react";

import { Color, ColorList, PaletteProps } from "./types";

// Palette scale tokens (e.g. --gray00, --blue10), excluding semantic tokens
// such as --background-primary or --foreground-muted.
const PALETTE_TOKEN = /^--(gray|purple|yellow|blue|green|red|orange)\d+$/;

// ---------------------------------------------------------- //
//                      HELPER FUNCTIONS                      //
// ---------------------------------------------------------- //
/**
 * Read the palette custom properties defined on :root straight from the
 * loaded stylesheets (colors.css). This keeps colors.css as the single
 * source of truth, so new tokens appear here automatically.
 * @example { '--blue10': 'var(--blue10)' }
 */
const readPaletteTokens = (): ColorList => {
	const tokens: ColorList = {};

	for (const sheet of Array.from(document.styleSheets)) {
		let rules: CSSRuleList;
		try {
			rules = sheet.cssRules;
		} catch {
			// Cross-origin stylesheets throw on access; skip them.
			continue;
		}

		for (const rule of Array.from(rules)) {
			if (rule instanceof CSSStyleRule && rule.selectorText === ":root") {
				for (const prop of Array.from(rule.style)) {
					if (PALETTE_TOKEN.test(prop)) {
						tokens[prop] = `var(${prop})`;
					}
				}
			}
		}
	}

	return tokens;
};

/**
 * Transform colorList from an object to an array of objects
 * @example
 * Input: { '--blue10': 'var(--blue10)' }
 * Output: [{ label: 'blue10', value: 'var(--blue10)' }]
 */
const transformColorList = (colorList: ColorList): Color[] =>
	Object.keys(colorList).map((colorName) => ({
		label: colorName.replace("--", ""),
		value: colorList[colorName],
	}));

// Get the background and text color values of each palette item
const getPaletteItemStyle = (color: Color) => {
	const itemTextColor = color.label.substring(color.label.length - 2);

	return {
		backgroundColor: color.value,
		// Extract the scale from the color label.
		// If the scale is greater or equal to 50, use white text for the label; otherwise, use dark text.
		color: parseInt(itemTextColor, 10) >= 50 ? "#ffffff" : "#0a0a23",
	};
};

// ---------------------------------------------------------- //
//                         COMPONENTS                         //
// ---------------------------------------------------------- //
const Palette = ({ colors }: PaletteProps) => {
	return (
		<div className="inline-flex flex-col m-4 w-3/12">
			{colors.map((color) => (
				<div
					className="flex items-center p-2 h-8"
					key={color.label}
					style={getPaletteItemStyle(color)}
				>
					{color.label}
				</div>
			))}
		</div>
	);
};

export const AllPalettes = (): JSX.Element => {
	const colors = transformColorList(readPaletteTokens());
	const getPaletteByColorName = (name: string) =>
		colors.filter((color) => color.label.includes(name));

	return (
		<>
			<Palette colors={getPaletteByColorName("gray")} />
			<Palette colors={getPaletteByColorName("purple")} />
			<Palette colors={getPaletteByColorName("yellow")} />
			<Palette colors={getPaletteByColorName("blue")} />
			<Palette colors={getPaletteByColorName("green")} />
			<Palette colors={getPaletteByColorName("red")} />
			<Palette colors={getPaletteByColorName("orange")} />
		</>
	);
};
