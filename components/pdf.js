import React from 'react';
import html2pdf from 'html2pdf.js';



const ConvertToPDF = ({elementId}) => {
  const convertToPDF = () => {
    // Select the element that you want to convert to PDF.
    const element = document.getElementById(elementId);
    if (!element) {
      console.error('Element not found');
      return;
    }

    // Optional: configure the pdf options
    let opt = {
      margin:       1,
      filename:     'resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Use html2pdf to convert the element.
    html2pdf().set(opt).from(element).save();
  };

  return (
    <button onClick={convertToPDF}>Convert to PDF</button>
  );
};

export default ConvertToPDF;

