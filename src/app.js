require("dotenv/config");

const express = require("express");
const { usersRouter } = require("./routes/users");

function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({ ok: true });
  });

  app.use("/users", usersRouter);

  // Basic error handler
  app.use((err, _req, res, _next) => {
    const status = Number.isInteger(err?.status) ? err.status : 500;
    res.status(status).json({
      error: {
        message: err?.message || "Internal Server Error",
      },
    });
  });

  return app;
}

module.exports = { createApp };

