var fs = require('fs')
fs.unlink('app1.js',function(error){
    console.log('deleted');
})