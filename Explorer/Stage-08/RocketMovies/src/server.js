require("express-async-errors");
const express = require("express");
const router = require("./routes");
const AppError = require("./utils/AppError");

const app = express();
const PORT = 8080;

app.use(express.json());

app.use(router);

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

app.listen(PORT, (req, res) => console.log(`Server running on port: ${PORT}`));
