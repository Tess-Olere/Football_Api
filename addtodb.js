require('dotenv').config()
const Teams = require('./model/team')
const jsonTeam = require('./team.json')
const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const startServer = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URI)
    await Teams.deleteMany()
    await Teams.create(jsonTeam)
    console.log('worked');
    process.exit(0)
} catch (error) {
    console.log(error);
    process.exit(1)
}
}
startServer();