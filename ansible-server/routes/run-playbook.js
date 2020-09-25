const express = require("express")
const router = express.Router();
var ansible = require("node-ansible");
router.get("/RunPlaybook",(req,res)=>{
    var command = new ansible.Playbook().playbook("/Users/ayushjain/Documents/pr/ansible-server/playbook")
    command.inventory("Inven.txt")
    var promise = command.exec();
    promise.then(function(result){
        console.log(result)
        res.send(result)
    
    })
    .catch(error=>{
        res.send(error)
    })
})

module.exports = router