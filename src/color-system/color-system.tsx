import React from 'react';

// import colorList from "../colors.css";

const colorList = {
  '--gray00': '#ffffff',
  '--gray05': '#f5f6f7',
  '--gray10': '#dfdfe2',
  '--gray15': '#d0d0d5',
  '--gray45': '#858591',
  '--gray75': '#3b3b4f',
  '--gray80': '#2a2a40',
  '--gray85': '#1b1b32',
  '--gray90': '#0a0a23',

  '--purple10': '#dbb8ff',
  '--purple50': '#9400d3',
  '--purple90': '#5a01a7',

  '--yellow05': '#fcf8e3',
  '--yellow10': '#faebcc',
  '--yellow40': '#ffc300',
  '--yellow45': '#ffbf00',
  '--yellow50': '#f1be32',
  '--yellow70': '#8a6d3b',
  '--yellow90': '#4d3800',

  '--blue05': '#d9edf7',
  '--blue10': '#bce8f1',
  '--blue30': '#99c9ff',
  '--blue50': '#198eee',
  '--blue70': '#31708f',
  '--blue90': '#002ead',

  '--green05': '#dff0d8',
  '--green10': '#d6e9c6',
  '--green40': '#acd157',
  '--green70': '#3c763d',
  '--green90': '#00471b',

  '--red05': '#f2dede',
  '--red10': '#ebccd1',
  '--red15': '#ffadad',
  '--red30': '#f8577c',
  '--red70': '#a94442',
  '--red80': '#f82153',
  '--red90': '#850000',
};

import { Color, ColorList, PaletteProps } from './types';

// ---------------------------------------------------------- //
//                      HELPER FUNCTIONS                      //
// ---------------------------------------------------------- //
/**
 * Transform colorList from an object to an array of objects
 * @example
 * Input: { '--blue10': 'var(--blue10)' }
 * Output: [{ label: 'blue10', value: 'var(--blue10)' }]
 */
const transformedColorList = Object.keys(colorList as ColorList).map(
  (colorName) => ({
    label: colorName.replace('--', ''),
    value: (colorList as ColorList)[colorName],
  })
);

// Get the background and text color values of each palette item
const getPaletteItemStyle = (color: Color) => {
  const itemTextColor = color.label.substring(color.label.length - 2);

  return {
    backgroundColor: color.value,
    // Extract the scale from the color label.
    // If the scale is greater or equal to 50, use white text for the label; otherwise, use dark text.
    color: parseInt(itemTextColor, 10) >= 50 ? '#ffffff' : '#0a0a23',
  };
};

const getPaletteByColorName = (name: string) =>
  transformedColorList.filter((color) => color.label.includes(name));

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
  return (
    <>
      <Palette colors={getPaletteByColorName('gray')} />
      <Palette colors={getPaletteByColorName('purple')} />
      <Palette colors={getPaletteByColorName('yellow')} />
      <Palette colors={getPaletteByColorName('blue')} />
      <Palette colors={getPaletteByColorName('green')} />
      <Palette colors={getPaletteByColorName('red')} />
    </>
  );
};
