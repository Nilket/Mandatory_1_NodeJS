import { readPage, constructPage } from "./templateEngine.js";

const CSS_LINK = '<link rel="stylesheet" href="/assets/css/main.css">' + '<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"></script>' + '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/atom-one-dark.min.css"/>';

const pages = [
    {route: '/', file: 'frontpage/frontpage', title: null},
    {route: '/week1/weekone', file: 'week1/weekone', title: 'First week'},
    {route: '/week2/weektwo', file: 'week2/weektwo', title: 'Second week'},
    {route: '/week3/weekthree', file: 'week3/weekthree', title: 'Third week'},
    {route: '/week4/weekfour', file: 'week4/weekfour', title: 'Fourth week'},
    {route: '/week5/weekfive', file: 'week5/weekfive', title: 'Fifth week'},
    {route: '/week6/weeksix', file: 'week6/weeksix', title: 'Sixth week'},
];

export const builtPages = new Map(
    pages.map(({route, file, title}) =>{
        const html = readPage(`./public/pages/${file}.html`);
        const page = constructPage(html, {documentTitle: title, cssLinks: CSS_LINK});
        return [route, page];
    })
);

// const frontpage = readPage('./public/pages/frontpage/frontpage.html');
// export const frontpagePage = constructPage(frontpage, {
//     cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
// });