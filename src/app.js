import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).set("Content-Type", "text/plain").send("Hello, World!");
});

// const port = 3000;
// app.listen(port, () => {
//   console.log(`[server]: Server is running on port ${port}`);
// });

export {app}