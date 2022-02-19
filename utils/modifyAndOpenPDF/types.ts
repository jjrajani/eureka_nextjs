import { RGB } from "pdf-lib";
import { PDFFont } from "pdf-lib";

export interface TextXArgs {
  text: Text;
  font: FontType;
  pageWidth: number;
}

export type TextXFunc = ({}: TextXArgs) => number;

export type FontType = {
  bold: PDFFont;
  regular: PDFFont;
};

export interface Text {
  text: string;
  x: number | TextXFunc;
  y: number;
  color: RGB;
  size: number;
  font?: PDFFont;
}
