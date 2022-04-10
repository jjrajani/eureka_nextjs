import { PDFDocument } from "pdf-lib";
import { FontType } from "utils/modifyAndOpenPDF/types";
import fontkit from "@pdf-lib/fontkit";

interface LoadFontsToPDFArgs {
  baseUrl: string;
  pdfDoc: PDFDocument;
}

const loadFontsToPDF = async ({
  baseUrl,
  pdfDoc
}: LoadFontsToPDFArgs): Promise<FontType> => {
  pdfDoc.registerFontkit(fontkit);

  const asapRegFontBytes = await fetch(
    `${baseUrl}/fonts/Asap-Regular.ttf`
  ).then((res) => res.arrayBuffer());
  const asapBoldFontBytes = await fetch(
    `${baseUrl}/fonts/Asap-Bold.ttf`
  ).then((res) => res.arrayBuffer());

  const asapFont = await pdfDoc.embedFont(asapRegFontBytes);
  const asapFontBold = await pdfDoc.embedFont(asapBoldFontBytes);

  return {
    regular: asapFont,
    bold: asapFontBold,
  };
};

export default loadFontsToPDF;
