require("express-async-errors");

const AppError = require("./utils/AppError");
const express = require("express");
const routes = require("./routes");
const migrationsRun = require("./database/sqlite/migrations");

migrationsRun();

const app = express();
app.use(express.json());

app.use(routes);

app.use((error, req, resp, next) => {
  if (error instanceof AppError) {
    return resp.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return resp
    .status(500)
    .json({ status: "error", message: "Internal server error" });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server running on port: " + PORT));
