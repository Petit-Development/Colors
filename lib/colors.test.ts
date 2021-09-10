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
    color: "#0000A0",
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
    color: "#0000A0",
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
    color: "#0000A0",
    filetype: "jpeg",
    height: 3000,
    width: 200,
  });
});
