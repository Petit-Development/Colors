import tinycolor from "tinycolor2";

const DARKEN_AMOUNT = 20;
const LIGHTEN_AMOUNT = 20;

interface Palette {
  primary: string;
  secondary: string;
}

/**
 * Create color palette based on the pased in hex color
 */
const createPalette = (color: string): Palette => {
  // The color object is mutable.
  const _primary = tinycolor(color);
  const primary = tinycolor(color);
  const secondary = primary.isLight()
    ? primary.darken(DARKEN_AMOUNT).toHex()
    : primary.lighten(LIGHTEN_AMOUNT).toHex();

  return {
    primary: `#${_primary.toHex()}`,
    secondary: `#${secondary}`,
  };
};

export default createPalette;
