import { readPage, constructPage } from "./templateEngine.js";


const frontpage = readPage('./public/pages/frontpage/frontpage.html');
export const frontpagePage = constructPage(frontpage, {
    cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
});

const week1 = readPage('./public/pages/week1/weekone.html');
export const week1Page = constructPage(week1, {
    documentTitle: 'First week',
    cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
});

const week2 = readPage('./public/pages/week2/weektwo.html');
export const week2Page = constructPage(week2, {
    documentTitle: 'Second week',
    cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
});

const week3 = readPage('./public/pages/week3/weekthree.html');
export const week3Page = constructPage(week3, {
    documentTitle: 'Third week',
    cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
});

const week4 = readPage('./public/pages/week4/weekfour.html');
export const week4Page = constructPage(week4, {
    documentTitle: 'Fourth week',
    cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
});

const week5 = readPage('./public/pages/week5/weekfive.html');
export const week5Page = constructPage(week5, {
    documentTitle: 'Fifth week',
    cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
});

const week6 = readPage('./public/pages/week6/weeksix.html');
export const week6Page = constructPage(week6, {
    documentTitle: 'Sixth week',
    cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
});

const week7 = readPage('./public/pages/week7/weekseven.html');
export const week7Page = constructPage(week7, {
    documentTitle: 'Seventh week',
    cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
});