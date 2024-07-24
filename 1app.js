const http = require('http');

const route = require('./routes1');

const server = http.createServer(route);

const PORT = 3200;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
