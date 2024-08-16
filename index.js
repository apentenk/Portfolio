const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); //need this to set this API to allow requests from other servers
const { MongoClient } = require("mongodb");
const path = require("path");
const url = require("url");

//load the environment variables from .env
dotenv.config();

const skillDB = require("./modules/skills/db");
const projectDB = require("./modules/projects/db");
const educationDB = require("./modules/education/db");
const experienceDB = require("./modules/experience/db");
const languageDB = require("./modules/languages/db");


const app = express();
const port = process.env.PORT || "8888";

const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?retryWrites=true&w=majority&appName=SafeHavenSanctuary`;
const client = new MongoClient(dbUrl);

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //need this line to be able to receive/parse JSON from request
app.use(express.static(path.join(__dirname, '/client/dist')));

//allow requests from all servers
app.use(cors({
  origin: "*"
}));

app.get('/', async (request, response) =>{
  response.sendFile(path.join(__dirname, './client/dist/index.html'));
})

//API endpoints

/*
 * returns: an array of menu links
 */
app.get("/api/projects", async (request, response) => {
  let projects = await projectDB.getProjects();
  response.json(projects); //send JSON object with appropriate JSON headers
});

app.get("/api/project/:id", async (request, response) => {
  let id = request.params.id;
  let selected = await projectDB.getProject(id);
  response.json(selected); //send JSON object with appropriate JSON headers
});

app.get("/api/skills", async (requst, response) => {
  let skills = await skillDB.getSkills();
  response.json(skills);
})

app.get("/api/languages", async (request, response) => {
  let languages = await languageDB.getLanguages();
  response.json(languages); //send JSON object with appropriate JSON headers
});

app.get("/api/education", async (request, response) => {
  let education = await educationDB.getEducations();
  response.json(education); //send JSON object with appropriate JSON headers
});

app.get("/api/experience", async (request, response) => {
  let experience = await experienceDB.getExperiences();
  response.json(experience); //send JSON object with appropriate JSON headers
});


//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});


//MongoDB functions
async function connection() {
  await client.connect();
  db = client.db("testdb"); //select testdb database
  return db;
}