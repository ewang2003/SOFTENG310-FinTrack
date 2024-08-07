//dependancies
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
//config
const pool = require("./config/db.js");
const createTables = require("./config/createTables.js");
const corsConfig = require("./config/corsConfig");
//middleware
const isAuthenticated = require("./middleware/autMiddleware.js");
//routes 
const userRoutes = require("./routes/users.js");
const transactionRoutes = require("./routes/transactions")


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsConfig);

pool.connect((err) => {
    if (err) {
        console.error('Failed to connect to database:', err);
    } else {
        console.log('Connected to database');
        try {
            createTables();
            console.log("created tables succesfully")
        } catch (error) {
            console.log("error creating tables")
        }
        

    }
});

app.use('/user',  userRoutes);
app.use('/transactions' , transactionRoutes);

const port = 4000

app.listen(port, () => {

    console.log(`Server is running on port ${port}`)

})