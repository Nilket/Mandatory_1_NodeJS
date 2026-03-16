import { Router } from 'express';

import { frontpagePage, week1Page, week2Page, week3Page, week4Page, week5Page, week6Page, week7Page } from '../util/pagesUtil.js';

const router = Router();

router.get('/', (req, res) => {
    res.send(frontpagePage);
});

router.get('/week1/weekone.html', (req, res) =>{
    res.send(week1Page)
});

router.get('/week2/weektwo.html', (req, res) =>{
    res.send(week2Page)
});

router.get('/week3/weekthree.html', (req, res) =>{
    res.send(week3Page)
});

router.get('/week4/weekfour.html', (req, res) =>{
    res.send(week4Page)
});

router.get('/week5/weekfive.html', (req, res) =>{
    res.send(week5Page)
});

router.get('/week6/weeksix.html', (req, res) =>{
    res.send(week6Page)
});

router.get('/week7/weekseven.html', (req, res) =>{
    res.send(week7Page)
})

export default router;