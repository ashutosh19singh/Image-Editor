const express = require('express');
const { model } = require('mongoose');
const Model = require('../models/usermodel')

const router = express.Router();

// const {Router} = require('express');
// const router = Router();

router.post ('/add', (req,res) =>{
    console.log(req.body);

    // to save
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

})

router.get('/getall', (req,res) => {
    
    // reading data
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err);
    });
});


// : denote url parameter
router.get('/getbyemail/:useremail' , (req,res) => {
    Model.find({email :req.params.useremail})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.post('/authenticate', (req,res) => {
    Model.findOne(req.body)
    .then((result) => {
        console.log(result);
        if(result){
            res.status(200).json(result);
        }else{
            res.status(401).json({status : 'failed'});
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})


router.delete('/delete/:userid',(req,res) => {
    Model.findByIdAndDelete(req.params.userid)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getbyid/:userid' , (req,res) => {
    Model.findById(req.params.userid)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/update/:userid' , (req,res) => {

    Model.findByIdAndUpdate(req.params.userid, req.body)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});



module.exports = router;