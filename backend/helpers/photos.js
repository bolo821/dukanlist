const path = require('path')
const multer = require('multer')

// === Vendor Image ===
const vendorImageStorage = multer.diskStorage({
    // Destination to store image     
    destination: './frontend/uploads/vendorPhotos', 
      filename: (req, file, cb) => {
        console.log('req.params.vendorID:', req.params.vendorID)
        cb(null, file.fieldname + '_' + req.params.vendorID + '_' + Date.now() + path.extname(file.originalname))
    }
});
const vendorImageUpload = multer({
    storage: vendorImageStorage,
    limits: {
      fileSize: 3000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
        res.status(500).json({
          success: false,
          error: 'Please upload a Image'
        })
       }
     cb(undefined, true)
  }
})  


// === Vendor Document ===
const vendorDocumentStorage = multer.diskStorage({
  destination: './frontend/uploads/vendorDocuments', 
    filename: (req, file, cb) => {
      console.log('req.params.vendorID:', req.params.vendorID)
      cb(null, file.fieldname + '_' + req.params.vendorID + '_' + Date.now() + path.extname(file.originalname))
  }
});
const vendorDocumentUpload = multer({
  storage: vendorDocumentStorage,
  limits: {
    fileSize: 3000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) { 
      res.status(500).json({
        success: false,
        error: 'Please upload a Image'
      })
     }
   cb(undefined, true)
}
})


// === Vendor Certificates ===
const vendorCertificateStorage = multer.diskStorage({
  destination: './frontend/uploads/vendorCertificates', 
    filename: (req, file, cb) => {
      console.log('req.params.vendorID:', req.params.vendorID)
      cb(null, file.fieldname + '_' + req.params.vendorID + '_' + Date.now() + path.extname(file.originalname))
  }
});
const vendorCertificateUpload = multer({
  storage: vendorCertificateStorage,
  limits: {
    fileSize: 3000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) { 
      res.status(500).json({
        success: false,
        error: 'Please upload a Image'
      })
     }
   cb(undefined, true)
}
})

module.exports =  { vendorImageStorage, vendorImageUpload, vendorDocumentStorage, vendorDocumentUpload, vendorCertificateUpload }