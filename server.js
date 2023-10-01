const http=require("http")
const fs=require("fs")
const path=require("path")
function requestHandler(req,res){
    
}

const server=http.createServer(requestHandler);
server.listen(3000);