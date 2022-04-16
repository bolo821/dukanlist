const mongoose = require('mongoose')

const connectDB = async () => {
    // const conn = await mongoose.connect('mongodb+srv://Bshal:bikalbishal@cluster0.wg4pf.mongodb.net/DukanList?retryWrites=true&w=majority')
    mongoose.connect('mongodb://localhost:27017/dukanlist', () => {
        console.log('Database connection successful.');
    })
    mongoose.connect('mongodb://localhost:27017/dukanlist', { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB connected...");
    })
    .catch(err => console.log('DB connection error: ', err));
}

module.exports = connectDB