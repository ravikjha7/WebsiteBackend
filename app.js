const express = require("express");

const globalErrorHandler = require("./controllers/errorCotroller");

const app = express();

app.use(express.json({ limit: "10kb" }));

const userRouter = require("./routes/userRoutes");

app.use("/api/v1/users", userRouter);

app.use(globalErrorHandler);

module.exports = app;
