import { createMocks } from "node-mocks-http";
import handler from "./[color]";

test("Image defaults to png", () => {
  const { req, res } = createMocks({
    method: "GET",
    query: {
      color: "#7F87BD",
    },
  });
  handler(req, res);
  expect(res.getHeaders()
         ["content-type"]).toBe("image/png");
});

test("Jpegs can be created", () => {
  const { req, res } = createMocks({
    method: "GET",
    query: {
      color: "#7F87BD",
      filetype: 'jpeg'
    },
  });
  handler(req, res);
  expect(res.getHeaders()
         ["content-type"]).toBe("image/jpeg");
});

test("Pdfs can be created", () => {
  const { req, res } = createMocks({
    method: "GET",
    query: {
      color: "#7F87BD",
      filetype: 'pdf'
    },
  });
  handler(req, res);
  expect(res.getHeaders()
         ["content-type"]).toBe("application/pdf");
});
