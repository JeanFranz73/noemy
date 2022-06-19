const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 25565;
const usersRouter = require("./routes/users");
const serversRouter = require("./routes/servers");
const werewolfGameRouter = require("./routes/games/werewolf")

app.use(morgan('combined'));
app.use(express.json());
app.set('json spaces', 4);

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.status(200).json({status: "ok"});
});

app.use("/user", usersRouter);
app.use("/server", serversRouter);
app.use("/werewolf", werewolfGameRouter)

app.listen(port, () => {
    console.log(`API aberta em http://localhost:${port}`);
});
