console.log('Hello World!');
const express = require('express');

const app = express();

const { adminAuth, userAuth } = require('./middlewears/adminAuth')

// app.use("/user", (req, res) => {
//     res.send("Hehehehehe");
// });

// app.get("/user/:id", (req, res) => {
//     console.log({...req.query});
//     console.log({...req.params});
//     res.send({firstname: "John", lastname: "Doe"});
// })

// app.post("/user", (req, res) => {
//     res.send("User created successfully!");
// })

// app.use("/about", (req, res) => {
//     res.send("Hello world from about page");
// })

// app.use("/", (req, res) => {
//     res.send("Hello world from homepage");
// })

app.use("/user/profile", (req, res) => {
    res.send("Hello world from user profile");  //user auth middlw won't be called here
})


app.use("/user", userAuth,
    (req, res, next) => {
        console.log("First middleware");
        res.send("Hello world from user");
    }
);

app.use("/admin", adminAuth);

app.get("/admin", (req, res) => {
    res.send("Welcome to the admin page");
})

app.get("/admin/dk", (req, res) => {
    res.send("Welcome to the admin dk page");
})

app.get("/profile", (req, res) => {
    res.send("hello from profile!!")
})


app.listen(3000,() => {
    console.log('Server is running on port 3000');
});