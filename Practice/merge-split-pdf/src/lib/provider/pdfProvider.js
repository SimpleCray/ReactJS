import { PDFDocument } from 'pdf-lib';

async function mergeBetweenPDF(pdfFileList) {
	let returnObj = { pdfFile: null, pdfNotMergedList: [] }

	if (pdfFileList.length > 0) {
		const reader = new FileReader();
		reader.onload = function (evt) { console.log(evt.target.result); };

		const pdfDoc = await PDFDocument.create();
		let pdfFilePromiseArrayBufferList = [];
		let pdfNotMergedList = [];

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
					try {
						const pdf = await PDFDocument.load(new Uint8Array(pdfArrayBufferFileList[i]));
						const pageIndices = Array.from(pdf.getPages().keys());
						const copiedPages = await pdfDoc.copyPages(pdf, pageIndices);
						copiedPages.forEach((page) => {
							pdfDoc.addPage(page);
						});

					} catch (err) {
						console.log(err)
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
