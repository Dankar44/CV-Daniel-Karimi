const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });

    const files = [
        'Curriculum-Space Surveillance Systems Engineer',
        'Cover Letter-Space Surveillance Systems Engineer'
    ];

    for (const file of files) {
        const page = await browser.newPage();
        const htmlPath = path.resolve(__dirname, 'Curriculums Echados', 'indra', file + '.html');
        const pdfPath = path.resolve(__dirname, 'Curriculums Echados', 'indra', file + '.pdf');

        await page.goto('file:///' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 30000 });

        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' }
        });

        console.log('PDF generated: ' + file + '.pdf');
        await page.close();
    }

    console.log('Indra PDFs regenerated!');
    await browser.close();
})();
