const express = require("express");

const app = express()

const PORT = process.env.PORT || 4001;

app.get("/infectados2m", (req, res, next) => {
    console.log(req)
  });

app.listen(PORT, () => {
    console.log(`O servidor está escutando na porta ${PORT}`);
  });