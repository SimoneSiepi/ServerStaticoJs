const http=require("http")
const fs=require("fs")
const path=require("path")
function requestHandler(req,res){
    let percorsoFile="."+req.url;
    if (percorsoFile==="./") {
        percorsoFile="./Home.html";
    }
    const extname=path.extname(percorsoFile);
    console.log(extname);
    let estensioneFile
    switch (extname) {
        case ".html":
            estensioneFile="text/html";
            break;
        case ".png":
            estensioneFile="image/png";
            break;
        case ".jpg":
            estensioneFile="image/jpg";
            break;
        case ".css":
            estensioneFile="text/css";
            break;
        case ".js":
            estensioneFile="text/javascript";
            break;
    
        default:
            break;
    }
    fs.readFile(percorsoFile,function(error,content){
        if (error) {
            res.writeHead(404);
        }
        else{
            res.writeHead(200,{"Content-Type":estensioneFile});
            res.write(content,'utf-8');
        }
        res.end();
    });
}

const server=http.createServer(requestHandler);
server.listen(3000);