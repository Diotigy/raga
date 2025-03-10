import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 5001;
const textFilePath = 'shows.txt';

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Vanakam Daa Maplaa");
})

app.post("/api/send-info", (req,res) => {
    const { title, language } = req.body;

    if(!title || !language) {
        return res.status(400).json({message: "All Fields are Required!"});
    }

    const currentTime = new Date().toISOString();
        const Data = `Title: ${title} \nLanguage: ${language} \nWatched At: ${currentTime} \n-----------------------\n\n`;
    
        fs.appendFile(textFilePath, Data, (err) => {
            if (err) {
                console.error("Error writing to file:", err);
                return res.status(500).json({ message: "Internal Server Error" });
            }
            console.log("Movie data logged successfully!");
            return res.status(200).json({ message: "Received Successfully" });
        });
})

app.listen(PORT, (req, res) => {
    fs.writeFile(textFilePath, "", { flag: "w" }, (err) => {
            if (err) {
                console.error("Error creating log file:", err);
                process.exit(1);
            }
            console.log("Log file initialized successfully.");
        });

    console.log(`Server Started http://localhost:${PORT}`);
})