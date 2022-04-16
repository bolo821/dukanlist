const mongoose = require('mongoose')

const vendorSchema = new mongoose.Schema({
    service: {
        service_slug: String,
        service_name: String
    },
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        street: String,
        city: String,
        locality: String,
        pincode: String
    },
    aadhaar_number: String,
    gst_number: String,
    email: String,
    website_url: String,
    about: {
        description: String,
        social_information: {
            facebook: String,
            twitter: String,
            instagram: String,
            linkedin: String
        },
        documents: {
            bank_proof: [String],
            business_proof: [String],
            id_proof: [String]
        },
        certificates: [String],
        photos: [String],
        payment_mode: {
            cash: {
                type: Boolean,
                default: false
            },
            credit_card: {
                type: Boolean,
                default: false
            },
            net_banking: {
                type: Boolean,
                default: false
            },
            upi: {
                type: Boolean,
                default: false
            },
            mobile_wallet: {
                type: Boolean,
                default: false
            }
        }
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    hasKYCSubmitted: {
        type: Boolean,
        default: false
    },
    hasPaid: {
        status: {
            type: Boolean,
            default: false
        },
        package_name: String,
        expires_at: String,
        expired: {
            type: Boolean,
            default: false
        }
    },
    rating: {
        type: Number,
        default: 0
    }
}, { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true } 
})

vendorSchema.virtual('leads', {
    ref: 'Lead',
    localField: '_id',
    foreignField: 'vendor_id', 
    justOne: true
})

module.exports = mongoose.model('Vendor', vendorSchema)