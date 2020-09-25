const express = require("express")
const router = express.Router()
const fs =  require("fs")
router.get("/CreatePlayBook",(req,res)=>{
    const createfile = fs.createWriteStream("routes/playbook.yml")
    createfile.write("---\n")
    createfile.write(`- hosts: all \n`)
    createfile.write("  tasks:\n")
    // createfile.write("     - name: hello\n")
    // createfile.write("       shell: uname -a > /home/raghav/Desktop/ayush.txt\n")

    // createfile.end()
    res.send("Create playbool success")
})


router.get("/AppendPlayBook",(req,res)=>{
    var AppendPlayBook = fs.appendFileSync("routes/playbook.yml",`     - name: ${req.query.Name}\n`)
    fs.appendFileSync("routes/playbook.yml",`       package: name=${req.query.PackageName} state=${req.query.Satate}\n`)
    // var appendhost =  fs.appendFileSync("Inven.txt",`\n${req.query.Ip} ansible_user=${req.query.UserName} ansible_ssh_pass=${req.query.Password}`)

    // createfile.write(`     - name: ${req.query.Name}\n`)
    // createfile.write(`       package: ${req.query.package}\n`)
    res.send("Append successful")
})
module.exports= router