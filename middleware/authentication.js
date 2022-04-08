const requireLogin = (req, res, next) => {
    if(!req.session.currentUser){
        console.log("need to be logged in")
        res.json("/login")
        return;
    }
    next();
};

const requireLogout = (req, res, next) => {
    if(req.session.currentUser){
        console.log("need to be logged out")
        res.json("/")
        return;
    }
    next();
}


const authenticationFunctions = {
    requireLogin,
    requireLogout,
}

module.exports = authenticationFunctions;