const express = require('express')
var cors = require("cors")

const router = express.Router()

const fs = require("fs")

router.get("/Createhostfile",(req,res)=>{
    var writeinventoryfile = fs.createWriteStream("Inven.txt")
    // writeinventoryfile.write("\n")
    // writeinventoryfile.write(`${req.query.ip} ansible_user=${req.query.username} ansible_ssh_pass=${req.query.password}`)
    res.send("Host File Successfully Created")
})
router.get("/AppendHost",(req,res)=>{
    var appendhost =  fs.appendFileSync("Inven.txt",`\n${req.query.Ip} ansible_user=${req.query.UserName} ansible_ssh_pass=${req.query.Password}`)
    console.log("append")
    res.send("Appende success")
})
module.exports=router