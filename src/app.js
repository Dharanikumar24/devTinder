console.log('Hello World!');
const express = require('express');

const app = express();

// app.use("/user", (req, res) => {
//     res.send("Hehehehehe");
// });

app.get("/user/:id", (req, res) => {
    console.log({...req.query});
    console.log({...req.params});
    res.send({firstname: "John", lastname: "Doe"});
})

app.post("/user", (req, res) => {
    res.send("User created successfully!");
})

app.use("/about", (req, res) => {
    res.send("Hello world from about page");
})

// app.use("/", (req, res) => {
//     res.send("Hello world from homepage");
// })



app.listen(3000,() => {
    console.log('Server is running on port 3000');
});