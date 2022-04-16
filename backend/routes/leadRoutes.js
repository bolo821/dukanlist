const express = require('express')
const mongoose = require('mongoose')
const { findByIdAndUpdate } = require('../models/leadModel')
const Lead = require('../models/leadModel')
const router = express.Router()

router.put('/:leadID', async(req, res) => {
    try {
        let fetchedLeads = await Lead.findOne({ vendor_id: req.body.vendor_id })
        if(!fetchedLeads)
            return res.status(404).json({
                success: true,
                error: 'Lead not found with that vendor ID'
            })
        
        let fetchedLeadIndex
        let fetchedLead
        fetchedLeads.leads.forEach((lead, index) => {
            if(JSON.stringify(lead._id) === JSON.stringify(req.params.leadID)){
                fetchedLeadIndex = index
                fetchedLead = lead
            }
        }) 
        fetchedLead.lead_status = req.body.feedback
        
        fetchedLeads[fetchedLeadIndex] = fetchedLead
        fetchedLeads = await fetchedLeads.save()

        res.json({
            success: true,
            message: 'Lead updated successfully',
            data: fetchedLeads
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
})

module.exports = router