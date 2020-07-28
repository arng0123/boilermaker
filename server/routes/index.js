const router = require('express').Router();
const userRouter = require('./users')
const puppyRouter = require('./puppies')
const kittenRouter = require('./kittens')

router.use('/users', userRouter); // matches all requests to /api/users/
router.use('/puppies', puppyRouter); // matches all requests to  /api/puppies/
router.use('/kittens', kittenRouter); // matches all requests to  /api/kittens/

//404 Error Handling
router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });


module.exports = router;