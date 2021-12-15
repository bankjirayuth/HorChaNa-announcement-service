const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.DBURL, {
        connectTimeoutMS : 5000,
        maxPoolSize : 50,
        minPoolSize : 10,
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB has connected.....')
    })
    .catch(err => console.log(err))
}
module.exports.connectDB = connectDB;