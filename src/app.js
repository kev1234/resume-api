import "dotenv/config"
import express from "express";
import fs from "fs";

const app = express();
const port = process.env.PORT;

const formations = getJsonFromFile("formation");
const jobs = getJsonFromFile("job");
const languages = getJsonFromFile("language");
const tools = getJsonFromFile("tool");

app.get("/formations", (req, res) => {
    res.json(formations);
});

app.get("/jobs", (req, res) => {
    res.json(jobs);
});

app.get("/languages", (req, res) => {
    res.json(languages);
});

app.get("/tools", (req, res) => {
    res.json(tools);
});

app.listen(port, (req, res) => {
    console.log("Server run on port " + port);
});

function getJsonFromFile(filename) {
    try {
        let data = JSON.parse(fs.readFileSync(`./data/${filename}.json`, "utf8"));
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return "";
    }
}