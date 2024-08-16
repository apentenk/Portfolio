const mongoose = require("mongoose");

const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/portfolio?retryWrites=true&w=majority&appName=SafeHavenSanctuary`;

//Project Schema and Model
const ProjectSchema = new mongoose.Schema({
    name: String,
    url: String,
    description: String
});

const Project = mongoose.model("Projects", ProjectSchema);

async function connect() {
    await mongoose.connect(dbUrl);
}

//Get specific Project from Projects collection that matches the id
async function getProject(projectID) {
    await connect();
    return await Project.findOne({ _id: projectID });
    
}

//Get All Projects from Projects collection
async function getProjects() {
    await connect();
    return await Project.find({}).sort({ name: 1 });;
}

module.exports = {
    getProject,
    getProjects
}
