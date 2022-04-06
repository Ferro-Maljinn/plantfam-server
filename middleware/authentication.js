const requireLogin = (req, res, next) => {
    if(!req.session.currentUser){
        res.json("/login")
        return;
    }
    next();
};

const requireLogout = (req, res, next) => {
    if(req.session.currentUser){
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