const app = require("express")();

app.get("/ping", (req, res) => {
  res.status(200).json({ ping: "🏓" });
});

let port = 6001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
