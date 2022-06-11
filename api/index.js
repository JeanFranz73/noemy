const express = require("express");
const app = express();
const port = 25565;
const usersRouter = require("./routes/users");

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.get("/", (req, res) => {
    res.json({status: "ok"});
});

app.use("/user", usersRouter);

app.listen(port, () => {
    console.log(`API aberta em http://localhost:${port}`);
});