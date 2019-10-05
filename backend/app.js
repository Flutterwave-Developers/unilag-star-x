/** Imports */
const express = require("express");
const path = require("path");
const routes = require("./src/routes");
const logger = require("morgan");
const database = require("./src/config/database");

/** App initialization */
const app = express();
const router = express.Router();
global.__basedir = __dirname;

/** Middlewares */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(helmet());
app.use(morgan("tiny"));

/** Initializing database */
database.initializeDatabase();

/**
 * Passport Initialization
 */
require("./src/config/passport")(passport);

/** set up routes {API Endpoints} */
routes(router);

app.use("/api/v1/", router);

module.exports = app;
