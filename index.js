const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/products");
const cors = require("cors")


app.use(cors({
  origin: "http://localhost:3000",
}))

app.use(express.json());
dotenv.config();


const port = process.env.PORT || 5000;

//connect to database
mongoose
  .connect(process.env.MONGO_URL  ,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("succesfull"))
  .catch((err)=>{console.log(err);
  });

app.listen(port, () => {
  console.log("success creating server");
});


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);

