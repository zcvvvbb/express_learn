const express = require("express")

const app = express()

const movie = require("./movie.json")

const port = 8888
const url =
  "https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0"

app.get("/", (req, res) => res.send("hello there!!!"))

app.get("/movie", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*")
  res.send(movie)
})

app.listen(port, () => {
  console.log(`serve start at ${port}`)
})
