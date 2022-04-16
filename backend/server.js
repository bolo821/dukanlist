const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db2')
const path = require('path')
const fs = require('fs');

// Load env vars
dotenv.config()

// Connect to DB
connectDB()

// Resource Routers
const vendorRouter = require('./routes/vendorRoutes')
const filterRouter = require('./routes/filterRoutes')
const authRouter = require('./routes/authRoutes')
const kycRouter = require('./routes/kycRoutes')
const packageRouter = require('./routes/packageRoutes')
const emailRouter = require('./routes/emailRoutes')
const leadRouter = require('./routes/leadRoutes')

// Initialize app
const app = express()

// CORS
app.use(cors())

// Body Parser
app.use(express.json())

app.use(express.static(path.join(__dirname, 'frontend')))

// Mount Routers
app.use('/api/vendors', vendorRouter)
app.use('/api/filter', filterRouter)
app.use('/api/auth', authRouter)
app.use('/api/kyc', kycRouter)
app.use('/api/payment', packageRouter)
app.use('/api/sendEmail', emailRouter)
app.use('/api/leads', leadRouter)

var port = 8080;
if (process.env.NODE_ENV === 'production') {
    port = 8443;
    const https = require('https');
    var https_options = {
        key: fs.readFileSync(path.join(__dirname, "dukanlist_com.key")),
        cert: fs.readFileSync(path.join(__dirname, "dukanlist_com.crt")),
        ca: [
                fs.readFileSync(path.join(__dirname, "TrustedRoot.crt")),
                fs.readFileSync(path.join(__dirname, "DigiCertCA.crt")),
            ]
    };

    const httpsServer = https.createServer(https_options, app);
	options = {
		cors: true,
		origins: "*",
	}

	httpsServer.listen(port, () => {
		console.log(`HTTPS Server running on port ${port}`);
	});
} else {
    const http = require('http');
    const server = http.createServer(app);
    options = {
      cors: true,
      origins: "*",
    }
    
    server.listen(port, () => {
      console.log(`HTTP Server is running on port ${port}`);
    });
}