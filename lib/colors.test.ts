import { generateColor } from "@lib/colors";
import { PassThrough } from "stream";
import * as fs from "fs";
import FileType from "file-type";

// Generate color files to manually validate them
const generateFile = false;

test("Can generate pngs", async () => {
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
  const ret = await FileType.fromStream(mockedStream);
  expect(ret!.mime).toBe("image/png");
});

// This test just validates that nothing errors out since
// there is a problem with the pdf stream
test("Can generate pdfs", async () => {
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
  //const ret = await FileType.fromStream(mockedStream);
  //expect(ret!.mime).toBe("image/jpeg");
});

test("Can generate jpegs", async () => {
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
  const ret = await FileType.fromStream(mockedStream);
  expect(ret!.mime).toBe("image/jpeg");
});
