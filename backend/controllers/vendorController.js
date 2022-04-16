const Vendor = require('../models/vendorModel')
const fs = require('fs')
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)

// Create new vendor
exports.createNewVendor = async(req, res) => {
    console.log('request arrived');
    try {
        const createdVendor = await Vendor.create(req.body)
        res.status(201).json({
            success: true,
            data: createdVendor
        })

    } catch(err) {
        console.log('error: ', err);
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
}

// Get vendor by ID
exports.getVendorById = async(req, res) => {
    try {
        const vendor = await Vendor.findById(req.params.vendorID).populate('leads')
        // console.log(vendor)
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
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

exports.updateKYCUploadedStatus = async (req, res) => {
    try {
        const updatedVendor = await Vendor.findByIdAndUpdate(req.params.vendorID, req.body, {
            runValidators: true,
            new: true
        })
        res.json({
            success: true,
            data: updatedVendor
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

exports.updatePaymentStatus = async(req, res) => {
    try {
        const updatedVendor = await Vendor.findByIdAndUpdate(req.params.vendorID, req.body, {
            runValidators: true,
            new: true
        })
        res.json({
            success: true,
            data: updatedVendor
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}
exports.updateVendorProfile = async(req, res) => {
    try {
        console.log(req.body)
        let vendor = await Vendor.findById(req.params.vendorID)
        if(!vendor)
            return res.status(404).json({
                success: false,
                error: 'Vendor not found'
            }) 
        
        if(req.body['about']){
            const { about: { social_information } } = req.body
            console.log('== hasInstagram ==')
            console.log(social_information['instagram'])
            let vendorSocialInformation = {...vendor.about.social_information}
            if(social_information['facebook'])
                vendorSocialInformation.facebook = social_information['facebook']
            if(social_information['twitter'])
                vendorSocialInformation.twitter = social_information['twitter']
            if(social_information['instagram'])
                vendorSocialInformation.instagram = social_information['instagram']
            if(social_information['linkedin'])
                vendorSocialInformation.linkedin = social_information['linkedin']

            vendor.about.social_information = vendorSocialInformation
            vendor = await vendor.save()
        } else {
            console.log('== I ran 3rd ==')
            vendor = await Vendor.findByIdAndUpdate(req.params.vendorID, req.body , {
                new: true,
                runValidators: true
            })
        }

        res.json({
            success: true,
            data: vendor
        })
        
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

exports.uploadVendorPhotos = async(req, res) => {
    try {
        let vendor = await Vendor.findById(req.params.vendorID)
        if(!vendor)
            return res.status(404).json({
                success: false,
                error: 'Vendor not found'
            }) 
        
        vendor.about.photos.push(req.file.filename)
        vendor = await vendor.save()
        res.json({
            success: true,
            data: vendor
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

exports.uploadVendorCertificates = async(req, res) => {
    try {
        let vendor = await Vendor.findById(req.params.vendorID)
        if(!vendor)
            return res.status(404).json({
                success: false,
                error: 'Vendor not found'
            }) 
        
        vendor.about.certificates.push(req.file.filename)
        vendor = await vendor.save()
        res.json({
            success: true,
            data: vendor
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

// Delete vendor
exports.deleteVendorPhotos = async(req, res) => {
    try {
        let vendor = await Vendor.findById(req.params.vendorID)
        if(!vendor)
            return res.status(404).json({
                success: false,
                error: 'Vendor not found'
            }) 
        
        // Filter photos
        let copyPhotos = vendor.about.photos
        copyPhotos = copyPhotos.filter(photo => photo !== req.params.photoName)

        // Delete the image from 'images'
        await unlinkAsync(`frontend/uploads/vendorPhotos/${req.params.photoName}`)

        // Update new photos
        vendor.about.photos = copyPhotos
        vendor = await vendor.save()

        res.json({
            success: true,
            data: vendor
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

// Upload vendor bank proof
exports.uploadVendorBankProof = async(req, res) => {
    console.log('=== Bank Proof ===')
    try {
        let vendor = await Vendor.findById(req.params.vendorID)
        if(!vendor)
            return res.status(404).json({
                success: false,
                error: 'Vendor not found'
            }) 
        
        // if(!vendor.about.documents.bank_proof.length){
        //     const photos = req.files.map(file => file.filename)
        //     vendor.about.documents.bank_proof = photos
        // }
        // else{
        //     req.files.map(file => vendor.about.documents.bank_proof.push(file.filename))
        // }
        vendor.about.documents.bank_proof.push(req.file.filename)
        vendor = await vendor.save()
        res.json({
            success: true,
            data: vendor
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

// Upload vendor business proof
exports.uploadVendorBusinessProof = async(req, res) => {
    console.log('=== Business Proof ===')
    try {
        let vendor = await Vendor.findById(req.params.vendorID)
        if(!vendor)
            return res.status(404).json({
                success: false,
                error: 'Vendor not found'
            }) 
        
        // if(!vendor.about.documents.business_proof.length){
        //     const photos = req.files.map(file => file.filename)
        //     vendor.about.documents.business_proof = photos
        // }
        // else{
        //     req.files.map(file => vendor.about.documents.business_proof.push(file.filename))
        // }

        vendor.about.documents.business_proof.push(req.file.filename)
        vendor = await vendor.save()
        res.json({
            success: true,
            data: vendor
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

// Upload vendor id proof
exports.uploadVendorIdProof = async(req, res) => {
    console.log('=== ID Proof ===')
    try {
        let vendor = await Vendor.findById(req.params.vendorID)
        if(!vendor)
            return res.status(404).json({
                success: false,
                error: 'Vendor not found'
            }) 
        
        // if(!vendor.about.documents.id_proof.length){
        //     const photos = req.files.map(file => file.filename)
        //     vendor.about.documents.id_proof = photos
        // }
        // else{
        //     req.files.map(file => vendor.about.documents.id_proof.push(file.filename))
        // }
        
        vendor.about.documents.id_proof.push(req.file.filename)
        vendor = await vendor.save()
        res.json({
            success: true,
            data: vendor
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

// Delete vendor business proof
exports.deleteVendorBusinessProof = async(req, res) => {
    try {
        let vendor = await Vendor.findById(req.params.vendorID)
        if(!vendor)
            return res.status(404).json({
                success: false,
                error: 'Vendor not found'
            }) 
        
        // Filter photos
        let copyPhotos = vendor.about.documents.business_proof
        copyPhotos = copyPhotos.filter(photo => photo !== req.params.proof_name)

        // Delete the image from 'images'
        await unlinkAsync(`images/${req.params.proof_name}`)

        // Update new photos
        vendor.about.documents.business_proof = copyPhotos
        vendor = await vendor.save()

        res.json({
            success: true,
            data: vendor
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

// Delete vendor bank proof
exports.deleteVendorBankProof = async(req, res) => {
    try {
        let vendor = await Vendor.findById(req.params.vendorID)
        if(!vendor)
            return res.status(404).json({
                success: false,
                error: 'Vendor not found'
            }) 
        
        // Filter photos
        let copyPhotos = vendor.about.documents.bank_proof
        copyPhotos = copyPhotos.filter(photo => photo !== req.params.proof_name)

        // Delete the image from 'images'
        await unlinkAsync(`images/${req.params.proof_name}`)

        // Update new photos
        vendor.about.documents.bank_proof = copyPhotos
        vendor = await vendor.save()

        res.json({
            success: true,
            data: vendor
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

// Delete vendor id proof
exports.deleteVendorIdProof = async(req, res) => {
    try {
        let vendor = await Vendor.findById(req.params.vendorID)
        if(!vendor)
            return res.status(404).json({
                success: false,
                error: 'Vendor not found'
            }) 
        
        // Filter photos
        let copyPhotos = vendor.about.documents.id_proof
        copyPhotos = copyPhotos.filter(photo => photo !== req.params.proof_name)

        // Delete the image from 'images'
        await unlinkAsync(`images/${req.params.proof_name}`)

        // Update new photos
        vendor.about.documents.id_proof = copyPhotos
        vendor = await vendor.save()

        res.json({
            success: true,
            data: vendor
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}