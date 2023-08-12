require("dotenv").config();

const express = require("express");
const app = express();
//import database 
const connectDB = require("./Database/db");
//import route
const taskRouter = require("./Route/task.route")

app.use(express.json());

app.use("/api/v1/task", taskRouter)

const port = 3000 || process.env.PORT;

const startApp = async () => {
  //TODO: Viết console log kết nối DB thành công cho mongoose
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening in ${port}...`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

startApp();
