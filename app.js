require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.set('strictQuery', true);


const teamRouter = require('./routes/teamRouter')

//route
app.use(teamRouter)

//middleware
app.use(cors())
app.use(express.json())

// error route
app.use((req, res) => {
    res.status(404).send(`Route not found <a href = '/api/v1/teams'>FOOTBALL API</a>`)
})
const startServer = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}...`);   
    })
} catch (error) {
    console.log(error);
}
}
startServer();