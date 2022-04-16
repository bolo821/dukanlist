const express = require('express')
const multer = require('multer')
const nodemailer = require('nodemailer')
const path = require('path')
const router = express.Router()

const vendorKYCStorage = multer.diskStorage({
    destination: './frontend/uploads/vendorKYC', 
      filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + req.params.vendorID + '_' + Date.now() + path.extname(file.originalname))
    }
  });
  const vendorKYCUpload = multer({
    storage: vendorKYCStorage,
    limits: {
      fileSize: 3000000
    },
    fileFilter(req, file, cb) {
        console.log('== Multer Running ==')
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
        res.status(500).json({
          success: false,
          error: 'Please upload a Image'
        })
       }
     cb(undefined, true)
  }
  })

// Controller to set images to the local folder
router.post('/:vendorID', vendorKYCUpload.single('vendorKYC'), (req, res) => {
    console.log('File Name:', req.file.filename)
    res.json({
        success: true,
        data: req.file.filename
    })
})

// Controller to send vendor KYC Details
router.post('/', async (req, res) => {
  try {
    const { images, vendorDetails } = req.body
    console.log('Sending Email...')
    const transporter = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
            user: 'bwsform@gmail.com',
            pass: 'bwsform2021'
        }
    })

    let info = await transporter.sendMail({
      from: "bwsform@gmail.com",
      to: "bwsform@gmail.com",
      subject: "Vendor Details",
      html: `<strong>Vendor Name:</strong> ${vendorDetails.name}<br/>
      <strong>Vendor Number:</strong> ${vendorDetails.number}<br/>
      <strong>Vendor ID:</strong> ${vendorDetails.vendor_id}<br/><br/>`,
      attachments: images.map(img => ({ filename: img, path: __dirname + '../../../frontend/uploads/vendorKYC' + '/' + img }))
    });

    // CLose transporter
    transporter.close();
    console.log('Email sent successfully')

    res.json({
      success: true,
      message: 'Email sent successfully'
    })
  } catch(err) {
    res.status(500).json({
      success: false,
      error: err.message
    })
  }
})
module.exports = router