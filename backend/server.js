// server.js
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post("/predict", async (req, res) => {
  try {
    const { square_footage } = req.body;
    console.log(square_footage);
    const response = await axios.post("http://localhost:5000/predict", {
      square_footage,
    });
    console.log(response);
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error making prediction");
  }
});

app.listen(8000, () => console.log("Server running on port 8000"));
