import { PDFDocument } from "pdf-lib";
import { useState, useEffect } from "react";


const LoadPDF = () => {
    const [pdfInfo, setPdfInfo] = useState([]);

    useEffect(() => {
        modifyPdf();
    }, []);

    const modifyPdf = async () => {
        const existingPdfBytes = await fetch(
            "https://pdf-lib.js.org/assets/with_update_sections.pdf"
        ).then((res) => res.arrayBuffer());

        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        const pages = pdfDoc.getPages();
        const firstPage = pages[0];

        // Get the width and height of the first page
        const { width, height } = firstPage.getSize();
        // firstPage.drawText("This text was added with JavaScript!", {
        //     x: 5,
        //     y: height / 2 + 300,
        //     size: 50,
        //     rotate: degrees(-45),
        // });

        const pdfBytes = await pdfDoc.save();
        const docUrl = URL.createObjectURL(
            new Blob(pdfBytes, { type: "application/pdf" })
        );
        setPdfInfo(docUrl);
    };

    return (
        <>{<iframe title="test-frame" src={pdfInfo} type="application/pdf" />}</>
    );
};

export default LoadPDF;