const router = require('express').Router();
const {createStore, getAllStores} = require('../controller/storeController');


router.post('/store', createStore);
router.get('/store', getAllStores);


module.exports = router;