import express from 'express';
import routes from './routes';
import cors from 'cors';

class App{

    constructor(){
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares(){
        // Enable CORS for all routes
        // and all origins
        this.server.use(cors());
        this.server.use(express.json());
    }   

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;