const router = require('express').Router();
const client = require('./connection');
const objectId = require('mongodb').ObjectID;

router.get('/todos', async(req, res) =>{
    try {
        const db = client.db('latihan');
        const result = await db.collection('todos').find({}).toArray();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
})

router.get('/todo/:id', async(req, res) =>{
    try {
        const db = client.db('latihan');
        const result = await db.collection('todos').findOne({_id: objectId(req.params.id)});
        res.send(result);
    } catch (error) {
        console.log(error);
    }
})
router.post('/todo', async(req, res) =>{
    try {
        const {todo} = req.body
        const db = client.db('latihan');
        const result = await db.collection('todos').insertOne({todo:todo});
        if(result.acknowledged){
            res.status(201).json({status: 201, message: 'berhasil ditambahkan'});
        }else{
            res.status(400).json({status: 400, message: 'gagal ditambahkan'});
        }
    } catch (error) {
        console.log(error);
    }
})
router.put('/todo/:id', async(req, res) =>{
    try {
        const {todo} = req.body
        const db = client.db('latihan');
        await db.collection('todos').updateOne({_id: objectId(req.params.id)}, {$set: {todo:todo}});
        res.status(201).json({status: 201, message: 'berhasil update'});
    } catch (error) {
        console.log(error);
    }
})
router.delete('/todo/:id', async(req, res) =>{
    try {
        const {todo} = req.body
        const db = client.db('latihan');
        await db.collection('todos').deleteOne({_id: objectId(req.params.id)}, {$set: {todo:todo}});
        res.status(201).json({status: 201, message: 'berhasil dihapus'});
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;