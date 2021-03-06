import { generateColor } from "@lib/colors";
import type { NextApiRequest, NextApiResponse } from "next";

const DEFAULT_DIMENSION = 500;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query.color) {
    res.setHeader("Content-Type", "application/json");
    return res.status(400).send({ error: "Missing color field" });
  }
  const filetype = req.query.filetype ?? "png";
  const contentType = `${
    filetype == "pdf" ? "application" : "image"
  }/${filetype}`;
  res.setHeader("Content-Type", contentType);
  const queryColor = req.query.color.toString();
  const color = queryColor.startsWith("#") ? queryColor : `#${queryColor}`;
  const width = req.query.width
    ? parseInt(req.query.width.toString())
    : DEFAULT_DIMENSION;

  const height = req.query.height
    ? parseInt(req.query.height.toString())
    : DEFAULT_DIMENSION;

  generateColor(res, {
    color: color,
    width: width,
    height: height,
  });
}
