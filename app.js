const express = require('express')
require('dotenv').config()
const app = express()
const port = 9000

app.get('/', (req, resp) => {
  resp.send('Hello World!')
})

app.get('/youtube',(req,resp)=>{
    resp.send('From youtube')
})

app.get('/login',(req,resp)=>{
    resp.send('<h1>hi</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
fafadf