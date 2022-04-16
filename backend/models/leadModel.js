const mongoose = require('mongoose')

const leadSchema = new mongoose.Schema({
    vendor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor'
    },
    leads: [{
        name: String,
        email: String,
        phone: String,
        lead_status: {
            isSpoken: {
                type: Boolean,
                default: false
            },
            isHired:{
                type:Boolean,
                default:false
            },
            isNotHired:{
                type:Boolean,
                default:false
            },
            isMissed:{ 
                type:Boolean,
                default:false
            },
            jobCompleted:{
                type:Boolean,
                default:false
            }
        },
        category_details: {
            title: String,
            service: String,
            city: String,
            description: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        expiresAt: Date
    }]
}, { timestamps: true })

module.exports = mongoose.model('Lead', leadSchema)