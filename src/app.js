import express from "express";
const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({message: 'get /api'})
});

// const port = 3000;
// app.listen(port, () => {
//   console.log(`[server]: Server is running on port ${port}`);
// });

export {app}
