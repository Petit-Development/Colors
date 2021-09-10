import { Canvas, createCanvas, JPEGStream, PDFStream, PNGStream } from "canvas";
import { Writable } from "stream";

interface Params {
  /**
   * The color to be generated
   *
   */
  color: string;

  /**
   * The file to be written to the stream
   */
  filetype?: "png" | "jpeg" | "pdf";
  /**
   * Y dimension of the generated color
   */
  height?: number;
  /**
   * X dimension of the generated color
   */
  width?: number;
}

/**
 * Generates colors as pdfs or image files.
 *
 * @param destStream -  The stream that will be written to
 */
export const generateColor = (
  /**
   * The stream that the content data will be written to. Once all the data has been written
   * the stream will be signaled to end.
   */
  destStream: Writable,
  { color, filetype = "png", height = 500, width = 500 }: Params
) => {
  const pdf = filetype == "pdf" ? "pdf" : undefined;
  const canvas = createCanvas(width, height, pdf);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = `${color}`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const fileStream: PNGStream | PDFStream | JPEGStream = determineStream(
    canvas,
    filetype
  );

  fileStream.pipe(destStream);
};

function determineStream(canvas: Canvas, filetype: string) {
  if (filetype === "pdf") {
    return canvas.createPDFStream();
  } else if (filetype === "png") {
    return canvas.createJPEGStream();
  } else {
    return canvas.createPNGStream();
  }
}
