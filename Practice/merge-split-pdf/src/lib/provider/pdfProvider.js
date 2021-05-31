import { PDFDocument } from 'pdf-lib';

async function mergeBetweenPDF(pdfFileList) {
	let returnObj = { pdfFile: null, pdfNotMergedList: [] }

	if (pdfFileList.length > 0) {
		const reader = new FileReader();
		reader.onload = function (evt) { console.log(evt.target.result); };

		const pdfDoc = await PDFDocument.create();
		let iterPdfDoc = await PDFDocument.create();
		// let iterPdfDocBytes;
		let pdfFilePromiseArrayBufferList = [];
		let pdfNotMergedList = [];
		let iterPdfDocPages = [];

		// Get all file URLs into a list using Promises and fetch API
		pdfFileList.forEach((pdfFile) => {
			// console.log(pdfFile)
			pdfFilePromiseArrayBufferList.push(
				fetch(URL.createObjectURL(pdfFile))
					.then(res => res.arrayBuffer())
			)
		})

		return Promise
			.all(pdfFilePromiseArrayBufferList)
			.then(async (pdfArrayBufferFileList) => {
				for (let i = 0; i < pdfArrayBufferFileList.length; i++) {
					// console.log(pdfArrayBufferFileList[i])
					// iterPdfDocBytes = reader.readAsArrayBuffer(pdfBlob)
					try {
						// Way 1
						// iterPdfDoc = await PDFDocument.load(new Uint8Array(pdfArrayBufferFileList[i]))
						// iterPdfDocPages = iterPdfDoc.getPages()
						// iterPdfDoc = await PDFDocument.create();
						// // Add each page in a temp file to check if all pages from this PDF can be added in the final one
						// iterPdfDocPages.forEach((pdfPage) => {
						// 	iterPdfDoc.addPage(pdfPage)
						// })
						// // No errors? Then add all pages to the final PDF
						// iterPdfDocPages.forEach((pdfPage) => {
						// 	pdfDoc.addPage(pdfPage)
						// })


						// Way 2
						// iterPdfDoc = await PDFDocument.load(new Uint8Array(pdfArrayBufferFileList[i]));
						// iterPdfDocPages = iterPdfDoc.getPages();
						// iterPdfDoc = await PDFDocument.create();

						// const pageIndices = Array.from(iterPdfDocPages.keys());
						// const copiedPages = await iterPdfDoc.copyPages(iterPdfDocPages, pageIndices);
						// copiedPages.forEach((page) => {
						// 	iterPdfDoc.addPage(page);
						// });

						// copiedPages.forEach((page) => {
						// 	pdfDoc.addPage(page);
						// });
						// pdfDoc = iterPdfDoc;


						// Way 3
						const pdf = await PDFDocument.load(new Uint8Array(pdfArrayBufferFileList[i]));
						const pageIndices = Array.from(pdf.getPages().keys());
						const copiedPages = await pdfDoc.copyPages(pdf, pageIndices);
						copiedPages.forEach((page) => {
							pdfDoc.addPage(page);
						});

					} catch (err) {
						console.log(err)
						// console.log("File " + pdfFileList[i].name + " not merged due to the following error: " + err.message)
						pdfNotMergedList.push(pdfFileList[i].name)
					}
				}

				returnObj.pdfFile = await pdfDoc.save();
				returnObj.pdfNotMergedList = pdfNotMergedList
				return returnObj
			})
			.catch((err) => {
				console.log(err)
				returnObj.pdfFile = null
				returnObj.pdfNotMergedList = pdfNotMergedList
				return returnObj
			})
	}
}

export default {
	mergeBetweenPDF
}
