import { PDFDocument } from "pdf-lib";
import { FontType } from "utils/modifyAndOpenPDF/types";
import fontkit from "@pdf-lib/fontkit";

const loadFontsToPDF = async (pdfDoc: PDFDocument): Promise<FontType> => {
  pdfDoc.registerFontkit(fontkit);

  const asapRegFontBytes = await fetch("/fonts/Asap-Regular.ttf").then((res) =>
    res.arrayBuffer()
  );
  const asapBoldFontBytes = await fetch("/fonts/Asap-Bold.ttf").then((res) =>
    res.arrayBuffer()
  );

  const asapFont = await pdfDoc.embedFont(asapRegFontBytes);
  const asapFontBold = await pdfDoc.embedFont(asapBoldFontBytes);

  return {
    regular: asapFont,
    bold: asapFontBold,
  };
};

export default loadFontsToPDF;
