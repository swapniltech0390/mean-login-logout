const config = require("./config/config").get(process.env.NODE_ENV);
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = config.PORT;
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
// app use
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression()); // Compress all routes
app.use(helmet());
app.use(express.static(path.join(__dirname, "public")));
var corsOptions = {
  origin: config.FRONT_END_HOST, //frontend url
  credentials: true,
};
app.use(cors(corsOptions));

const userRouter = require("./routes/user-route");
app.use("/", userRouter);

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
