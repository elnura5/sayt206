
import cors from "cors"
import express from "express"
import { connect,mongoose } from 'mongoose';
const app = express()
const port = 3000


app.use(express.json())
app.use(cors())
async function main() {
    await connect('mongodb+srv://elnuraasbf206:elnuraasbf206@cluster0.o4iqras.mongodb.net/');
}

// getting-started.js
const DataSchema = new mongoose.Schema({
    name: String,
    image:String,
    price:String
  });
  const Blog = mongoose.model('database', DataSchema);
  app.get('/site',async (req, res) => {
    const data= await Blog.find()
      res.send(data)
  })
  app.post('/site',async (req, res) => {
    const {body}=req
    const data= await Blog.create(body)
      res.send(data)
  })



main().catch(err => console.log(err));
      
      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })