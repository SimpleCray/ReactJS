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
        const pdfFileBuffer = await fetch(URL.createObjectURL(pdfFile)).then(res => res.arrayBuffer());
        const pdfDoc = await PDFDocument.load(pdfFileBuffer);
        splitDocToPages(pdfFile);
        const pdfBytes = await pdfDoc.save();
        const docUrl = createPdfUrl(pdfBytes);
        setPdfInfo(docUrl);
    };

    const splitDocToPages = async (pdfFile) => {
        let pagesUrl = [];
        const pdfFileBuffer = await fetch(URL.createObjectURL(pdfFile)).then(res => res.arrayBuffer());
        const pdfDoc = await PDFDocument.load(pdfFileBuffer);
        const numberOfPages = pdfDoc.getPages().length;

        for (let i = 0; i < numberOfPages; i++) {
            // Create a new "sub" document
            const subDocument = await PDFDocument.create();
            // copy the page at current index
            const [copiedPage] = await subDocument.copyPages(pdfDoc, [i])
            subDocument.addPage(copiedPage);
            const pdfBytes = await subDocument.save();
            const pdfFromBytes = await PDFDocument.load(pdfBytes);
            console.log('pdfFromBytes')
            console.log(pdfFromBytes)
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
                < iframe style={{ scrolling: "no" }} title="test-frame" src={itemURL} type="application/pdf" />

            ))}
            {/* {<iframe title="test-frame" src={pdfInfo} type="application/pdf" />} */}
            {/* /< iframe title="test-frame" src="https://pdf-lib.js.org/assets/with_update_sections.pdf" type="application/pdf" /> */}

        </>
    );
};

export default LoadPDF;