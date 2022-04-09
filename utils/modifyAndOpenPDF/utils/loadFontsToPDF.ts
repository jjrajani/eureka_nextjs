import { PDFDocument } from "pdf-lib";
import { FontType } from "utils/modifyAndOpenPDF/types";
import fontkit from "@pdf-lib/fontkit";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL;

const loadFontsToPDF = async (pdfDoc: PDFDocument): Promise<FontType> => {
  pdfDoc.registerFontkit(fontkit);

  const asapRegFontBytes = await fetch(
    `${BASE_URL}/fonts/Asap-Regular.ttf`
  ).then((res) => res.arrayBuffer());
  const asapBoldFontBytes = await fetch(
    `${BASE_URL}/fonts/Asap-Bold.ttf`
  ).then((res) => res.arrayBuffer());

  const asapFont = await pdfDoc.embedFont(asapRegFontBytes);
  const asapFontBold = await pdfDoc.embedFont(asapBoldFontBytes);

  return {
    regular: asapFont,
    bold: asapFontBold,
  };
};

export default loadFontsToPDF;
