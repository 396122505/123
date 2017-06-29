/**
 * Created by Administrator on 2017/6/28.
 */
var http=require('http');
var fs=require('fs');
http.createServer(function (req,res) {
    switch (req.url){
        case "/index.html":
            fs.readFile("index.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"});
                    res.end(data);
                }
            });
            break;
        case "/log.html":
            fs.readFile("log.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"});
                    res.end(data);
                }
            });
            break;
        case "/pic.html":
            fs.readFile("pic.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"});
                    res.end(data);
                }
            });
            break;
        case "/a.jpg":
        fs.readFile("a.jpg",function (err, data) {
            if (err){
                console.log("读取失败");
                console.log(err)
            }else {
                res.writeHead(200,{"content-type":"image/jpeg"});
                res.end(data);
            }
        });
        break;
            fs.readFile("index.css","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/css"});
                    res.end(data);
                }
            });
            break;
        case "/index.js":
            fs.readFile("index.js","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/javascript"});
                    res.end(data);
                }
            });
            break;
        default:
            res.end("404 not found")
    }
}).listen(3000);