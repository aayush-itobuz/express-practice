import express from 'express';
import mongoose from 'mongoose';
import route from './route.js';

const app = express();

const port = 3000;

app.use(express.json())
app.use("/note", route)
const dbUrl =  'mongodb+srv://aayush:1234@cluster0.wty9i.mongodb.net/';


app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})

const mongoConnect = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log('MongoDB connected');
  } catch (err) {
    console.log("error occurred");
  }
}
mongoConnect();