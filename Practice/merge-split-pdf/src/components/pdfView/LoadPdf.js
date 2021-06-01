import { PDFDocument, degrees } from "pdf-lib";
import { useState, useEffect, useRef } from "react";


const LoadPDF = (props) => {
    const { pdfFile } = props;
    const viewer = useRef(null);
    const [pdfInfo, setPdfInfo] = useState([]);
    const [pdfDocumentPages, setPdfDocumentPages] = useState([]);

    // const reader = new FileReader();
    // reader.onload = function (evt) { console.log(evt.target.result); };

    useEffect(() => {
        modifyPdf();
    }, []);

    const modifyPdf = async () => {
        const existingPdfBytes = await fetch(
            "https://pdf-lib.js.org/assets/with_update_sections.pdf"
        ).then((res) => res.arrayBuffer());

        const pdfFileBuffer = await fetch(URL.createObjectURL(pdfFile)).then(res => res.arrayBuffer());
        const pdfDoc = await PDFDocument.load(pdfFileBuffer);
        splitDocToPages(pdfDoc);
        const pdfBytes = await pdfDoc.save();
        const docUrl = createPdfUrl(pdfBytes);
        setPdfInfo(docUrl);
    };

    const splitDocToPages = async (pdfDoc) => {
        let pagesUrl = [];
        const numberOfPages = pdfDoc.getPages().length;

        for (let i = 0; i < numberOfPages; i++) {
            // Create a new "sub" document
            const subDocument = await PDFDocument.create();
            // copy the page at current index
            const [copiedPage] = await subDocument.copyPages(pdfDoc, [i])
            subDocument.addPage(copiedPage);
            const pdfBytes = await subDocument.save();
            const docUrl = createPdfUrl(pdfBytes);
            pagesUrl.push(docUrl);
        }
        setPdfDocumentPages(pagesUrl);
        console.log(pagesUrl);
    }

    const createPdfUrl = pdf => {
        var bytes = new Uint8Array(pdf);
        var blob = new Blob([bytes], { type: "application/pdf" });
        const docUrl = URL.createObjectURL(blob);
        return docUrl;
    }

    return (
        <>
            {pdfDocumentPages.map(itemURL => (
                < iframe title="test-frame" src={itemURL} type="application/pdf" />

            ))}
            {/* {<iframe title="test-frame" src={pdfInfo} type="application/pdf" />} */}
        </>
    );
};

export default LoadPDF;