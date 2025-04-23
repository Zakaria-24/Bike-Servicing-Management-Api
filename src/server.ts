// import express from "express";
// const app = express();
// const port = 3000;

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

import { Server } from "http";
import app from "./app";

const port = process.env.PORT || 5000;

async function main() {
  const server: Server = app.listen(port, () => {
    console.log("Sever is running on port", port);
  });
}

main();
