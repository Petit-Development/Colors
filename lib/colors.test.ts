import { generateColor } from "@lib/colors";
import { PassThrough } from "stream";
import * as fs from "fs";

// Generate color files to manually validate them
const generateFile = false;

// These tests just validate that nothing errors out
test("Can generate pngs", () => {
  const mockedStream = new PassThrough();
  if (generateFile) {
    const out = fs.createWriteStream("image.png");
    mockedStream.pipe(out);
  }
  generateColor(mockedStream, {
    color: "#7F87BD",
    filetype: "png",
    height: 3000,
    width: 200,
  });
});

test("Can generate pdfs", () => {
  const mockedStream = new PassThrough();
  if (generateFile) {
    const out = fs.createWriteStream("image.pdf");
    mockedStream.pipe(out);
  }
  generateColor(mockedStream, {
    color: "#7F87BD",
    filetype: "pdf",
    height: 3000,
    width: 200,
  });
});

test("Can generate jpegs", () => {
  const mockedStream = new PassThrough();
  if (generateFile) {
    const out = fs.createWriteStream("image.jpg");
    mockedStream.pipe(out);
  }
  generateColor(mockedStream, {
    color: "#7F87BD",
    filetype: "jpeg",
    height: 3000,
    width: 200,
  });
});
