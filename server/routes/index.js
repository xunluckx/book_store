const { Router } = require('express');
const router = new Router();
const bookRouter = require('./bookRouter');
const genreRouter = require('./genreRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/genre', genreRouter);
router.use('/book', bookRouter);

module.exports = router;
