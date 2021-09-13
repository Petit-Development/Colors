import { createMocks } from "node-mocks-http";
import handler from "./[color]";

test("Color image", () => {
  const { req, res } = createMocks({
    method: "GET",
    query: {
      "color": "#7F87BD"
    }
  });
  handler(req, res);
});
