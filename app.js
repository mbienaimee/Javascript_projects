// const fs= require('fs')
var fs = require('fs')
fs.readFile('index.js','utf-8',function(error,data){
    console.log(data)
})