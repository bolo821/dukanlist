const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        console.log("Hello welcome!");
       // const conn = await mongoose.connect('mongodb+srv://Bshal:bikalbishal@cluster0.wg4pf.mongodb.net/DukanList?retryWrites=true&w=majority')
       const conn = await mongoose.connect('mongodb://localhost:27017/myFirstDatabase') 
       console.log(`MongoDB Connected: ${ conn.connection.host }`.brightGreen)
    } catch(err) {
        console.error(err.message.brightRed)
        //process.exit()
    }
}

module.exports = connectDB