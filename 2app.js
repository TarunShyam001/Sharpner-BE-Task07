const http = require('http');

const routes = require('./routes2');
const routes2 = require('./routes2');

const server = http.createServer(routes2.handler,()=>{
    console.log(routes2.messageText);
});

const PORT = 5200;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});