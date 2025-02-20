const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// API route to fetch NCAA member list
app.get("/api/ncaa-schools", async (req, res) => {
    try {
        const url = "https://web3.ncaa.org/directory/memberList?type=12&division=III";
        const response = await axios.get(url);
        
        if (response.data) {
            res.json(response.data);
        } else {
            res.status(404).json({ message: "No data found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch NCAA schools" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
