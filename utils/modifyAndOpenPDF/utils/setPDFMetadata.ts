import { PDFDocument } from "pdf-lib";
import moment from "moment";

const setPDFMetadata = ({
  pdfDoc,
  subject,
  title,
  userInput,
}: {
  pdfDoc: PDFDocument;
  subject: string;
  title: string;
  userInput: { first: string; last: string };
}) => {
  pdfDoc.setTitle(
    `${title} - ${userInput.first} ${userInput.last} - ${moment().format(
      "MM/DD/YYYY"
    )}`
  );
  pdfDoc.setAuthor("Eureka Holistic Nutrition");
  pdfDoc.setCreator("Eureka Holistic Nutrition");
  pdfDoc.setCreationDate(new Date());
  pdfDoc.setKeywords([
    "Eureka Holistic Nutrition",
    "Eureka",
    "Holistic",
    "Nutrition",
    "Meal Mastery",
    "Meal",
    "Karen",
    "Harrison",
    "Karen Harrison",
    "Health Coach",
    "Health",
    "Diet",
    "Diet Coach",
  ]);
  pdfDoc.setProducer("Jenna Rajani");
  pdfDoc.setSubject(subject);
};

export default setPDFMetadata;
