const express = require('express')
const Vendor = require('../models/vendorModel')
const router = express.Router()

// Register vendor
router.post('/register', async(req, res) => {
    try {
        const createdVendor = await Vendor.create(req.body)
        res.status(201).json({
            success: true,
            data: createdVendor
        })

    } catch(err) {
        if(err.code === 11000)
            return res.status(500).json({
                success: false,
                error: 'Vendor with that number already exists'
            })

        res.status(500).json({
            success: false,
            error: err.message
        })
    }
})

// Login vendor
router.post('/login', async(req, res) => {
    try {
        const vendor = await Vendor.findOne({ number: req.body.number }).populate('leads')
        if(!vendor)
            return res.status(404).json({
                success: false,
                error: 'Vendor not found'
            })
        
        res.json({
            success: true,
            data: vendor
        })
    } catch(err) {
        console.log('error: ', err);
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
})

module.exports = router