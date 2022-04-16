const express = require('express')
const multer = require('multer')
const { vendorImageUpload, vendorDocumentUpload, vendorCertificateUpload } = require('../helpers/photos')
const { 
    createNewVendor,
    getVendorById,
    updateVendorProfile,
    updatePaymentStatus,
    updateKYCUploadedStatus,
    uploadVendorPhotos,
    deleteVendorPhotos,
    uploadVendorBankProof,
    uploadVendorBusinessProof,
    uploadVendorIdProof,
    deleteVendorBankProof,
    deleteVendorBusinessProof,
    deleteVendorIdProof,
    uploadVendorCertificates
} = require('../controllers/vendorController')

// Multer Storage
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./frontend/uploads")
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

// Multer
const upload = multer({ storage: storage })


// Vendor Router
const router = express.Router()

// Create a new vendor
router.post('/', createNewVendor)

// Find a vendor by ID
router.get('/:vendorID', getVendorById)

// Update vendor
router.put('/:vendorID', updateVendorProfile)

// Update vendor payment status
router.put('/:vendorID/paymentStatus', updatePaymentStatus)

// Update KYC Submitted status
router.put('/:vendorID/kycUploadedStatus', updateKYCUploadedStatus)

// Add photos to vendor
router.put('/:vendorID/photos', vendorImageUpload.single('vendorImage'), uploadVendorPhotos)

// Add photos to vendor
router.put('/:vendorID/certificates', vendorCertificateUpload.single('vendorCertificate'), uploadVendorCertificates)

// Delete vendor photo by ID
router.delete('/:vendorID/photos/:photoName', deleteVendorPhotos)

// Update/Delete vendor documents[bank_proof]
router.put('/:vendorID/documents/bank_proof', vendorDocumentUpload.single('vendorDocument'), uploadVendorBankProof)
router.delete('/:vendorID/documents/bank_proof/:proof_name', deleteVendorBankProof)

// Update/Delete vendor documents[business_proof]
router.put('/:vendorID/documents/business_proof', vendorDocumentUpload.single('vendorDocument'), uploadVendorBusinessProof)
router.delete('/:vendorID/documents/business_proof/:proof_name', deleteVendorBusinessProof)

// Update/Delete vendor documents[id_proof]
router.put('/:vendorID/documents/id_proof', vendorDocumentUpload.single('vendorDocument'), uploadVendorIdProof) 
router.delete('/:vendorID/documents/id_proof/:proof_name', deleteVendorIdProof)

module.exports = router