const http = require("node:http");

const { createApp } = require("./app");
const { connectToMongo } = require("./config/db");

async function main() {
  const app = createApp();

  const port = Number.parseInt(process.env.PORT || "3000", 10);

  await connectToMongo(process.env.MONGODB_URI);

  const server = http.createServer(app);
  server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

