const mongoose = require("mongoose");

const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/portfolio?retryWrites=true&w=majority&appName=SafeHavenSanctuary`;

//Project Schema and Model
const ExperienceSchema = new mongoose.Schema({
    position: String,
    company: String,
    start: Date,
    end: Date,
    location: String,
    description: [{ type: String}]
});

const Experience = mongoose.model("Experience", ExperienceSchema, "experience");

async function connect() {
    await mongoose.connect(dbUrl);
}

//Get specific Project from Projects collection that matches the id
async function getExperience(experienceID) {
    await connect();
    return await Experience.findOne({ _id: experienceID });
    
}

//Get All Projects from Projects collection
async function getExperiences() {
    await connect();
    return await Experience.find({}).sort({ name: 1 });;
}

module.exports = {
    getExperience,
    getExperiences
}
