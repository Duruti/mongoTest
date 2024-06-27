const express = require("express");
const mongoose = require("mongoose");

const app = express();
let connexion = false;

mongoose
   .connect(
      `mongodb+srv://toto:NA6xuWoe23c3Vzf3@openclassroom.75no4qm.mongodb.net/?retryWrites=true&w=majority&appName=OpenClassRoom`
   )
   .then(() => {
      connexion = true;
      console.log("Connexion à MongoDB réussie !");
   })
   .catch((error) => console.log("Connexion à MongoDB échouée !", error));

app.use("/", (req, res) => {
   res.status(200).json({ message: `connexion MongoAtlas ${connexion}` });
});

app.listen(3000, () => {
   console.log("connexion sur le port 3000");
});

