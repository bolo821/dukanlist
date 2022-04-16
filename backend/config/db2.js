const mongoose = require('mongoose')

const connectDB = async () => {
    // const conn = await mongoose.connect('mongodb+srv://Bshal:bikalbishal@cluster0.wg4pf.mongodb.net/DukanList?retryWrites=true&w=majority')
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB connected...");
    })
    .catch(err => console.log('DB connection error: ', err));
}

module.exports = connectDB