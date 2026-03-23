import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'CV-Daniel-Karimi-Telecom-ES.html');
const pdfPath = path.join(__dirname, 'CV-Daniel-Karimi-Telecom-ES.pdf');
const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.goto(fileUrl, { waitUntil: 'networkidle0' });
await page.pdf({
  path: pdfPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' }
});
await browser.close();
console.log('PDF guardado:', pdfPath);
