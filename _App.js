const express = require("express")
const app = express()
const port = 9215
const gpaRules = require("./gpa")
app.get('/developer', (req, res) => {

res.json({name: "carpentier, joshua"})


}) 

// apg.get is creating a url
app.get('/mid', (req, res) =>  {
 const score = req.query.score
 const stats = {score,status: "failing"}

 if (score >= 65){

    stats.status = "passing"
 }
res.json(stats)


})
// req and res doesnt matter could be anything
app.get('/gpa', (req,res) => {

    const score = req.query.score
    const status = gpaRules.gpa(score)

    res.json(status)
    
    }) 


app.listen(port, () => console.log(`Port No: ${port}`))