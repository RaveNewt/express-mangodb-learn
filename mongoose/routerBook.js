require('./connection');
const router = require('express').Router();
const Book = require('./bookModel')

router.get('/books', async(req, res) =>{
    try {
        const {title} = req.query;

        let conditions = {};
        if(title) {
            conditions = {title: new RegExp(title, 'i')};
        }
        const result = await Book.find(conditions).select('_id title price stock status').limit(5);
        res.status(200).json({message: 'Success', data: result});
    } catch (error) {
        console.log(error.message);
    }
})
router.post('/books', async(req, res) =>{
    try {
        const {title, price, stock, category} = req.body;
        const result = await Book.create({title, price, stock, category});
        res.status(200).json({message: 'Success', data: result});
    } catch (error) {
        console.log(error.message);
    }
})
router.post
module.exports = router;