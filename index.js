const http = require('http');
const app = require('./app');
const connectToDB = require('./mongoDB');
const PORT = 9008;

http.createServer(app).listen(PORT, () => {
    new connectToDB();
    console.log(`Server is running at port ${PORT}`);
});