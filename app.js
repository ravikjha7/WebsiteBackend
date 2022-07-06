const express = require("express");

const globalErrorHandler = require("./controllers/errorCotroller");

const app = express();

app.use(express.json({ limit: "10kb" }));

const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");
const eventRouter = require("./routes/eventRoutes");

app.use("/api/v1/users", userRouter);
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/events", eventRouter);

app.use(globalErrorHandler);

module.exports = app;
