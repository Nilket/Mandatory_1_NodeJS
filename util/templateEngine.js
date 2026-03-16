import fs from 'fs';

const header = readPage('./public/components/header/header.html');
const footer = readPage('./public/components/footer/footer.html');

export function constructPage(page, options = {}) {
    return header
            .replace('$$DOCUMENT_TITLE$$', options.documentTitle || 'Note application')
            .replace('$$CSS_LINKS$$', options.cssLinks || '')
         + page 
         + footer;
}

export function readPage(path) {
    return fs.readFileSync(path).toString();
}