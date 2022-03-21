const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

server.listen(3000, 'localhost', () => {
    // 開始監聽時要啟動的function
    console.log('listening 4 reqs on port3000');
})