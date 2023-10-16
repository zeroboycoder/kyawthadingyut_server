const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");

app.use(cors());
app.use(routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Server is listening on port " + PORT));
