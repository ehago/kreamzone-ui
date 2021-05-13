const colors = {
  yellow: '#f1f1ea',
  blue: '#ebf0f5',
  gray: '#f4f4f4',
  red: '#f6eeed',
};

const theme = {
  colors,
};

export type ThemeType = typeof theme;

export const brandToColor = (brand: any) => {
  if (brand.indexOf('사카이') > -1) return colors.yellow;
  else if (brand.indexOf('Jordan') > -1) return colors.yellow;
  else if (brand.indexOf('NIKE') > -1) return colors.yellow;

  return colors.gray;
};

export default theme;
