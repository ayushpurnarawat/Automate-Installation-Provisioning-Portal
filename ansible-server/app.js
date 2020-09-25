const express = require("express")
var cors = require("cors")

const app = express()
const fs = require("fs")
app.use(cors())
var Ansible = require("node-ansible");
// var command = new Ansible.AdHoc().module("shell").hosts('all').args("hello ayush")
// var promice =     command.exec()
// var comm=new Ansible.AdHoc().hosts('ayush').module('ping')
// var comm=new Ansible.Playbook().playbook('exp_conditional')
// comm.inventory("Inven.txt")
// var promice = comm.exec()
// promice.then(function(result){
//     console.log(result.output.fatal,"...")
// })
// .catch(error=>console.log(error))
const hostsfile = require("./routes/hostsfile")
app.use("/",hostsfile)

const ReadHostsFile = require("./routes/ReadHostsFile")
app.use("/",ReadHostsFile)

const RunPlaybook =  require("./routes/run-playbook")
app.use("/",RunPlaybook)

const playbookfile = require('./routes/playbookfile')
app.use("/playbook",playbookfile)
// app.use("/",(req,res)=>{
//     res.send("hello")
// })
app.use("/createinventory",(req,res)=>{
    var create = fs.createWriteStream("ad.yml")
create.end()
res.send("create")
})
app.use("/writeinventory",(req,res)=>{
    var writestreame = fs.createWriteStream("ad.yml")
    writestreame.write(`- hosts: ${req.query.hosts} \n`)
    writestreame.write("  tasks:\n")
    writestreame.write("     - name: hello\n")
    writestreame.write("       shell: uname -a > /home/raghav/Desktop/ayush.txt\n")

    writestreame.end()
    res.send(`create ${req.query.hosts}`)

})
app.listen(9000)