
import cors from "cors"
import express from "express"
import mongoose, { connect } from 'mongoose';
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
  app.get('/products',async (req, res) => {
    const data= await Blog.find()
      res.send(data)
  })
  app.get('/products/:id',async (req, res) => {
    const {id}=req.params
    const data= await Blog.findById(id)
      res.send(data)
  })
  app.post('/products',async (req, res) => {
    const {body}=req
    const data= await Blog.create(body)
      res.send(data)
  })
  app.delete('/products/:id',async (req, res) => {
    const {body}=req
    const {id}=req.params
    const data= await Blog.findByIdAndDelete(id,body)
      res.send(data)
  })


main().catch(err => console.log(err));
      
      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })