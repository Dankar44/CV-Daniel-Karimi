const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDFs() {
    const browser = await puppeteer.launch({ headless: "new" });

    const files = [
        'Curriculum-Data IA Product Owner',
        'Curriculum-GenAI Product Owner',
        'Curriculum-Aviation BI Consultant',
        'Curriculum-Esp Atribucion Marketing',
        'Curriculum-GSGT Repairs Engineer',
        'Curriculum-Market Intelligence Analyst',
        'Curriculum-Cyber Security Head'
    ];

    for (const file of files) {
        const page = await browser.newPage();

        // Cargar el archivo HTML
        const htmlPath = path.join(__dirname, 'Curriculums Echados', 'iberia', `${file}.html`);
        const url = `file://${htmlPath}`;

        await page.goto(url, { waitUntil: 'networkidle0' });

        // Generar PDF
        await page.pdf({
            path: path.join(__dirname, 'Curriculums Echados', 'iberia', `${file}.pdf`),
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0mm',
                right: '0mm',
                bottom: '0mm',
                left: '0mm'
            }
        });

        console.log(`PDF generado: ${file}.pdf`);
    }

    await browser.close();
}

generatePDFs().catch(console.error).then(() => console.log('Iberia PDF generado!'));
