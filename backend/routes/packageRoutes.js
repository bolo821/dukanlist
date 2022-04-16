const express = require('express')
const Package = require('../models/packageModel')
const router = express.Router();
const {
    createOrder,
    verifyPayment,
    updateOrderToPaid
} = require("../controllers/packageController")

router.post('/createOrder', createOrder)
router.post('/verifyPayment', verifyPayment)
router.post('/createPackage/:vendorID', async (req, res) => {
    try {
        let fetchedPackage = await Package.findOne({ vendor_id: req.params.vendorID })
        if(!fetchedPackage){
            const createdPackage = await Package.create(req.body)
            return res.json({
                success: true,
                message: 'Package created successfully',
                data: createdPackage
            })
        }
        
        fetchedPackage = await Package.findOneAndUpdate({ vendor_id: req.params.vendorID }, req.body, { 
            runValidators: true,
            new: true
        })
        res.json({
            success: true,
            message: 'Package created successfully',
            data: fetchedPackage
        })
    } catch(err) {
        res.status(500).json({
            status: false,
            error: err.message
        })
    }
})

router.put('/updatePackage/:vendorID', async (req, res) => {
    try {
        let fetchedPackage = await Package.findOne({ vendor_id: req.params.vendorID })
        if(!fetchedPackage) {
            return res.status(404).json({
                status: false,
                error: 'Vendor not found!'
            })
        }

        console.log('== req.body ==', req.body)
        fetchedPackage = await Package.findOneAndUpdate({ vendor_id: req.params.vendorID }, req.body, {
            runValidators: true,
            new: true
        })
        res.json({
            success: true,
            data: fetchedPackage
        })
    } catch(err) {
        res.status(500).json({
            status: false,
            error: err.message
        })
    }
})

// router.put('/:id/pay', updateOrderToPaid)

module.exports = router;
