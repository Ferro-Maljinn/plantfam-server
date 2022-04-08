const requireLogin = (req, res, next) => {
    console.log("running login middleware")
    if(req.session.currentUser){
        console.log(req.session, "need to be logged in")
        return next();
          }
          console.log(req.session)
          console.log("sending error bc user is not logged in")
         return res.status(401).json({errormessage: "user has to be logged in to view this page"})
};

// const requireLogout = (req, res, next) => {
//     if(req.session.currentUser){
//         console.log("need to be logged out")
//         res.json({errormessage: "already logged in"})
//         return;
//     }
//     next();
// }


const authenticationFunctions = {
    requireLogin,
    }

module.exports = authenticationFunctions;