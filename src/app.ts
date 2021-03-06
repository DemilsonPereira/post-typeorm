import express, { Request, Response } from 'express';
import { router } from './routers';
import './database';
class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.configuration();
    this.routes();
    this.app.use(express.json());
  }

  public configuration() {
    this.app.set('port', process.env.PORT || 3000);
  }

  public routes() {
    this.app.get('/', (request: Request, response: Response) => {
      response.send("Daddy On!");
    });
    this.app.use(router);
  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening ${this.app.get('port')} port.`);
    });
  }
}

export {
  Server
}
