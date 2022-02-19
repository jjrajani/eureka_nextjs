import { PDFDocument } from "pdf-lib";

const attachSlides = async (
  slidesFile: ArrayBuffer | undefined,
  pdfDoc: PDFDocument,
  startIndex?: number
) => {
  if (slidesFile) {
    const supplementTypePdf = await PDFDocument.load(slidesFile);
    const pageCount = supplementTypePdf.getPageCount();

    const slidesPdf = await pdfDoc.copyPages(
      supplementTypePdf,
      new Array(pageCount).fill(0).map((_, i) => i)
    );

    slidesPdf.forEach((slidePdf) => {
      if (startIndex) {
        pdfDoc.insertPage(startIndex, slidePdf);
      } else {
        pdfDoc.addPage(slidePdf);
      }
    });
  }
};

export default attachSlides;
