const express = require("express");
const path = require("path");

const logger = require('./middleware/Logger')

const app = express();

//Database
const {connectDB} = require('./config/database')

require('dotenv').config();

connectDB();


//Init Middleware
// app.use(logger);

//Body parse middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/announces', require('./routes/api/announces'));



//Set static folder
// app.use(express.static(path.join(__dirname, "public")));

// app.get('/', (req, res) => {
//     // res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     res.send("Hello")
// })

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
