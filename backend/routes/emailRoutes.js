const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

router.post('/', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body

        console.log('Sending Email...')
        const transporter = nodemailer.createTransport({
            service: 'Gmail', 
            auth: {
                user: 'officialdukanlist@gmail.com',
                pass: 'Surfer@2021surfer#'
            }
        })
    
        let info = await transporter.sendMail({
          from: "officialdukanlist@gmail.com",
          to: "dukanlist2021@gmail.com",
          subject: subject,
          html: `<strong>Name:</strong> ${name}<br/>
          <strong>Email:</strong> ${email}<br/>
          <strong>Phone:</strong> ${phone}<br/>
          <strong>Message:</strong> ${message}<br/><br/>`,

        });
        
        console.log('info:', info)

        // CLose transporter
        transporter.close();
        console.log('Email sent successfully')
    
        res.json({
          success: true,
          message: 'Email sent successfully'
        })
    } catch(err) {
        // res.status(500).json({
        //   success: false,
        //   error: err.message
        // })
    }
})

module.exports = router