const Router = require("express").Router();
const Path = require("path");

Router.use('/exercise', (req, res) =>{
    res.sendFile(Path.join(__dirname,"../../public/exercise.html"));
});
Router.use("/stats", (req, res)=>{
    res.sendFile(Path.join(__dirname,"../../public/stats.html"));
});

module.exports = Router;
