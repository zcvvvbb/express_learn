// const cheerio = require('cheerio');
const fs  = require('fs');
const axios = require('axios')
async function scraping (){
  const res = await axios.get(url) 
  // console.log(res.data)
  console.log(res.data)
  // parse(html)
  fs.writeFile('movie.json',JSON.stringify(res.data),(err)=>{
    console.log(err)
  })
}


function main(){
  scraping ()
}

main()
