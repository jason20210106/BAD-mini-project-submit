import express from "express";
import {knex} from "./db";
import path from "path";
import dotenv from "dotenv";
dotenv.config()
// import { Request, Response } from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));
// Need for later lectures
app.use(express.json());
// app.get("/", function (req: Request, res: Response) {
//   res.end("Hello World");
// });


app.post("/input",async(req,res)=>{
  const data = req.body; //{data:"BUY CAR"}
  await knex('bad_mini_project')
  .insert({
    input:data.input, 
    done:false
  })
  const result = await knex('bad_mini_project').select("*").where("done","false");
  res.json({result})
})

app.put('/update',async(req,res)=>{
  await knex('bad_mini_project').update({ done: true })
    const result1 = await knex('bad_mini_project')
    res.json({result1})
  
})

app.get('/gettodolist',async (req,res)=>{
  console.log('123')
  const result = await knex('bad_mini_project').select("*").where("done","false");
  res.json(result)
})

//app GET route, use knex to select all task from DB

// app.post("/input",async(req,res)=>{
//    const inputName = req.body;
//     await knex('bad_mini_project')
//    .insert({
//     input: inputName.value,
//    })
//    const result1 = await knex('bad_mini_project').select('name')
// })


app.use(express.static(path.join(__dirname,"public")));
const PORT = 8080;

app.use((req, res) => {
    res.sendFile(path.resolve("./public/404.html"));
  });
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});