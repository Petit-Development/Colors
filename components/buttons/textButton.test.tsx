import IconButton from "./iconButton";
import { fireEvent, render, screen } from "@testing-library/react";
import TextButton from "./textButton";

test("On click is called for text button", async () => {
  const onclick = jest.fn();
  render(<TextButton text="Text" onClick={onclick} />);
  expect(onclick).toBeCalledTimes(0);
  fireEvent.click(screen.getByRole('button'));
  expect(onclick).toBeCalled();
});

test("Text is rendered", async () => {
  const onclick = jest.fn();
  render(<TextButton text="Text" onClick={onclick} />);
  expect(screen.queryByText('Text')).toBeTruthy();
});
