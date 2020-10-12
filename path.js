const path = require("path");
const fs = require("fs");

// public/uploads/avatar
const filePath = path.join("public", "uploads", "avatar");

fs.writeFile("./writeFile.html",filePath, err=>{
    if(err!=null){
        console.log(err);
        return;
    }
    console.log("done");
})

console.log(filePath);