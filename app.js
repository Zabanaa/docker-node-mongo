const express   = require("express")
const app       = express()
const mongoose  = require("mongoose")

// DB Setup
mongoose.connect("mongodb://mongo:27017")

app.get("/", (req, res) => {
    res.send("ZINEDINE YAZID ZIDANE")
})

app.listen(3000, () => console.log("Server listening on port 3000"))
