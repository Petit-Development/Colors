import IconButton from "./iconButton";
import { fireEvent, render, screen } from "@testing-library/react";

test("On click is called for icon button", async () => {
  const onclick = jest.fn();
  render(<IconButton icon="play" onClick={onclick} />);
  expect(onclick).toBeCalledTimes(0);
  fireEvent.click(screen.getByRole('button'));
  expect(onclick).toBeCalled();
});
