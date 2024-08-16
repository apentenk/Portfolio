const mongoose = require("mongoose");

const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/portfolio?retryWrites=true&w=majority&appName=SafeHavenSanctuary`;

//Project Schema and Model
const EducationSchema = new mongoose.Schema({
    name: String,
    enrol: Date,
    grad: Date,
    cert: String,
    description: String
});

const Education = mongoose.model("Education", EducationSchema, "education");

async function connect() {
    await mongoose.connect(dbUrl);
}

//Get specific Project from Projects collection that matches the id
async function getEducation(educationID) {
    await connect();
    return await Education.findOne({ _id: educationID });
    
}

//Get All Projects from Projects collection
async function getEducations() {
    await connect();
    return await Education.find({}).sort({ name: 1 });;
}

module.exports = {
    getEducation,
    getEducations
}
