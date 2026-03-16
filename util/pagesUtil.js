import { readPage, constructPage } from "./templateEngine.js";

const CSS_LINK = '<link rel="stylesheet" href="/assets/css/main.css">';

const pages = [
    {route: '/', file: 'frontpage/frontpage', title: null},
    {route: '/week1/weekone.html', file: 'week1/weekone', title: 'First week'},
    {route: '/week2/weektwo.html', file: 'week2/weektwo', title: 'Second week'},
    {route: '/week3/weekthree.html', file: 'week3/weekthree', title: 'Third week'},
    {route: '/week4/weekfour.html', file: 'week4/weekfour', title: 'Fourth week'},
    {route: '/week5/weekfive.html', file: 'week5/weekfive', title: 'Fifth week'},
    {route: '/week6/weeksix.html', file: 'week6/weeksix', title: 'Sixth week'},
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

// const week1 = readPage('./public/pages/week1/weekone.html');
// export const week1Page = constructPage(week1, {
//     documentTitle: 'First week',
//     cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
// });

// const week2 = readPage('./public/pages/week2/weektwo.html');
// export const week2Page = constructPage(week2, {
//     documentTitle: 'Second week',
//     cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
// });

// const week3 = readPage('./public/pages/week3/weekthree.html');
// export const week3Page = constructPage(week3, {
//     documentTitle: 'Third week',
//     cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
// });

// const week4 = readPage('./public/pages/week4/weekfour.html');
// export const week4Page = constructPage(week4, {
//     documentTitle: 'Fourth week',
//     cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
// });

// const week5 = readPage('./public/pages/week5/weekfive.html');
// export const week5Page = constructPage(week5, {
//     documentTitle: 'Fifth week',
//     cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
// });

// const week6 = readPage('./public/pages/week6/weeksix.html');
// export const week6Page = constructPage(week6, {
//     documentTitle: 'Sixth week',
//     cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
// });

// const week7 = readPage('./public/pages/week7/weekseven.html');
// export const week7Page = constructPage(week7, {
//     documentTitle: 'Seventh week',
//     cssLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
// });