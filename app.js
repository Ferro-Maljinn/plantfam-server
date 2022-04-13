// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");
const cors = require('cors');

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars


const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// default value for title local
const capitalized = require("./utils/capitalized");
const projectName = "server-app";
app.use(cors({credentials: false, origin: 'http://localhost:3000'}));

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const plantRouter = require('./routes/plant');
const commentRouter = require('./routes/comment');

app.use('/api/v1', authRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/plant', plantRouter)
app.use('/api/v1/comment', commentRouter)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);


/* GET index page */
app.get("/", async function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

module.exports = app;
