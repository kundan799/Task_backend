require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const projectRouter = require("./routes/project.router");

const app = express();
const cors = require("cors");
const DBconnect = require("./db/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(
   { origin:"*"}
));

app.get("/", (req, res) => res.send("hello"));
// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/project", projectRouter);

const port = process.env.PORT || 8080;
DBconnect();
app.listen(port, () => {
  console.log(`server started on port ${8080}`);
});
