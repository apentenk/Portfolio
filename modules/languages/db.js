const mongoose = require("mongoose");

const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/portfolio?retryWrites=true&w=majority&appName=SafeHavenSanctuary`;

//Project Schema and Model
const LanguageSchema = new mongoose.Schema({
    name: String,
    level: Number
});

const Language = mongoose.model("Languages", LanguageSchema);

async function connect() {
    await mongoose.connect(dbUrl);
}

//Get specific Project from Projects collection that matches the id
async function getLanguage(languageID) {
    await connect();
    return await Language.findOne({ _id: languageID });
    
}

//Get All Projects from Projects collection
async function getLanguages() {
    await connect();
    return await Language.find({}).sort({ name: 1 });;
}

module.exports = {
    getLanguage,
    getLanguages
}
