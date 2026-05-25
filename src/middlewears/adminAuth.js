const adminAuth = (req, res, next) => {
    let auth = "xyz"
    console.log("Admin auth middleware");
    if(auth === 'xyz') {
        next();
    }
    else {
        res.status(401).send("Unauthorized");
    }
}

const userAuth = (req, res, next) => {
    let auth ="dk";
    console.log("User auth middleware");
    if(auth === 'dk') {
        next();
    }
    else {
        res.status(401).send("Unauthorized");
    }
}


module.exports = {
    adminAuth,
    userAuth
}