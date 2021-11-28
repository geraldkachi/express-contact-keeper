const express = require("express")

const app = express();

// app.get('/', (req, res) => res.send("Hello Backend Code"))
app.get('/', (req, res) => res.json({ msg: "Hello Backend Code" }))

// Define Routes  i want every backend routes to start with /api
app.use('/api/users', require("./routes/users"))
app.use('/api/contacts', require("./routes/contacts"))
app.use('/api/auth', require("./routes/auth"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Starts On ${PORT}`));