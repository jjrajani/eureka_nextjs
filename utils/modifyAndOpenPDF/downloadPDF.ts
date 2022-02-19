const downloadPDF = (fileUrl: string) => {
  let element = document.createElement("a");
  element.setAttribute("href", fileUrl);
  element.setAttribute("download", "planner.pdf");
  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

export default downloadPDF;
