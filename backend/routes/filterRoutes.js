const express = require('express')
const Vendor = require('../models/vendorModel')
const Lead = require('../models/leadModel')
const router = express.Router()

// Get all Category Related Vendors [For Client]
router.post('/:category', async(req, res) => {
    try {
        const filteredVendors = await Vendor.find({ service: req.params.category })
        res.json({
            success: true,
            data: filteredVendors
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
})

// Add new lead to all related vendors
router.post('/', async(req, res) => {
    try {
        const newLead = req.body
        console.log(newLead)

        // Fetch all related vendors
        const filteredVendors = await Vendor.find({ 'service.service_slug': newLead.category_details.category })
        if(!filteredVendors.length) 
            return res.status(404).json({
                success: false,
                error: 'Vendors not found',
            })

        // Update or add new leads
        filteredVendors.forEach(async vendor => {
            try{
                let lead = await Lead.find({ vendor_id: vendor._id })
                if(!lead.length) 
                    await Lead.create({ vendor_id: vendor._id, leads: [newLead] })
                else {
                    lead[0].leads.push(newLead)
                    await lead[0].save()
                }
            } catch(err) {}
        })
        res.status(200).json({
            success: true,
            message: 'Successfully added new lead'
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
})

module.exports = router