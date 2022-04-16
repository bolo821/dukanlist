const mongoose = require('mongoose')
const Vendor = require('./vendorModel')

const packageSchema = new mongoose.Schema({
    vendor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor'
    },
    order_id: String,
    package: {
        package_name: {
            type: String,
            enum: ['basic', 'standard', 'premium']
        },
        package_price: Number
    },  
    paid_at: {
        type: Date,
        default: Date.now
    },
    expires_at: Date,
    expired: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

// packageSchema.pre('save', function(next) {
//     if(this.package.package_name === 'basic'){
//         const monthDate = Date.now() + 84 * 24 * 3600 * 1000
//         this.expires_at = monthDate
//     }
//     if(this.package.package_name === 'standard'){
//         const monthDate = Date.now() + 168 * 24 * 3600 * 1000
//         this.expires_at = monthDate
//     }
//     if(this.package.package_name === 'premium') {
//         const monthDate = Date.now() + 336 * 24 * 3600 * 1000
//         this.expires_at = monthDate
//     }
    
//     next()
// })

module.exports = mongoose.model('Package', packageSchema)