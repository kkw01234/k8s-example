const http = require("http");
const server = http.createServer((req,res)=> {
    res.end(`${req.url} ${process.env.name}`)
})

server.listen(3000, () => {
    console.log("서버실행")
})