import http from 'http';
import {config} from 'dotenv';
import app from "./src/provider/app";

config();

const server = http.createServer(app);
const {PORT, HOST} = process.env;

server.listen(PORT, () => {
    console.log(`Service Api run: ${HOST} : ${PORT}`);
});