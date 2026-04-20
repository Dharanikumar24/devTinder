console.log('Hello World!');
const express = require('express');

const app = express();

app.use("/about", (req, res) => {
    res.send("Hello world from about page");
})

app.use("/", (req, res) => {
    res.send("Hello world from homepage");
})

app.listen(3000,() => {
    console.log('Server is running on port 3000');
});