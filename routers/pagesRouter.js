import { Router } from 'express';

import { builtPages } from '../util/pagesUtil.js';

const router = Router();

for (const [route, page] of builtPages){
    router.get(route, (req, res) => res.send(page));
}

export default router;

// router.get('/', (req, res) => {
//     res.send(frontpagePage);
// });
