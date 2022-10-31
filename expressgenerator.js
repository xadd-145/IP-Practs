//EXPRESS GENERATOR
RUN npx express-generator

//Code
const express=require(express)
const app=express()
app.get('/ ',(req,res) => {
res.send('hello')
})
app.listen(3000)

//Run
node filename.js

