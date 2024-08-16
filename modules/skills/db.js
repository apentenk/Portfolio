const mongoose = require("mongoose");

const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/portfolio?retryWrites=true&w=majority&appName=SafeHavenSanctuary`;

//Skills Schema and Model
const SkillSchema = new mongoose.Schema({
    name: String
})

const Skill = mongoose.model("Skill", SkillSchema);

async function connect() {
    await mongoose.connect(dbUrl);
}

//Get specific Skills from Skills collection that matches the id
async function getSkill(skillID) {
    await connect();
    return await Skill.findOne({_id: skillID});
}

//Get All Skills from Skills collection
async function getSkills() {
    await connect();
    return await Skill.find({}).sort({name: 1});
}

module.exports = {
    getSkill,
    getSkills
}