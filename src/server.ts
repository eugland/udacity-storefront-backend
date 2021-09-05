import express from "express"
import bodyParser from "body-parser"
const app = express()

const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(3000, () => console.log(`starting app on: ${address}`));
