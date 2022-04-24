const express = require('express');
const router = express.Router();
const lost = require('../models/lost')
// import the controller file for fcuntions

router.post('/', (req, res) => {
    const { itemname, description, question,answer, type, url } = req.body
    try {
        lost.insertMany({ itemname, description, question,answer, type, url })
            .then((data) => {
                return res.json({
                    "status": "OK",
                     data
                })
            })
    }
    catch(err){
        return res.json(
            {
                "status":"error",
                 err
            }
        )
    }    
})
module.exports = router;
