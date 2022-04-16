const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        console.log("Hello welcome!");
       // const conn = await mongoose.connect('mongodb+srv://Bshal:bikalbishal@cluster0.wg4pf.mongodb.net/DukanList?retryWrites=true&w=majority')
       const conn = await mongoose.connect('mongodb://localhost:27017/dukanlist') 
       console.log(`MongoDB Connected: ${ conn.connection.host }`.brightGreen)
    } catch(err) {
        console.log('error in connection to mongodh: ', err);        
        //process.exit()
    }
}

module.exports = connectDB