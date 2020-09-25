const express = require("express")
const router = express.Router()
const fs = require("fs")

router.get("/ReadHostsFile",async (req,res)=>{
    fs.readFile('Inven.txt','utf8', function read(err, data) {
        if (err) {
            throw err;
        }
        const content = data;
    
        // Invoke the next step here however you like
        // console.log(content);   // Put all of the code here (not the best solution)
        processFile(content);   // Or put the next step in a function and invoke it

    });
    
    function processFile(content) {
        res.json(content)

        // console.log(content);
    }
})
function processFile(content) {
    console.log(content);
}

module.exports = router