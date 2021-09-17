import createPalette from "./palette";


test('It creates the correct palette for light colors', () => {
  const palette = createPalette('#aaabff');
  expect(palette.primary).toBe('#aaabff');
  expect(palette.secondary).toBe('#4446ff');
});

test('It creates the correct palette for dark colors', () => {
  const palette = createPalette('#544F57');
  expect(palette.primary).toBe('#544f57');
  expect(palette.secondary).toBe('#87808c');
});
