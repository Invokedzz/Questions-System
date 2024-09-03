import path from "path";
import express from "express";
import { engine } from "express-handlebars";
import { accesspage } from "./routes";
import { receivedInfo } from "./routes";

const application = express();
const port = process.env.PORT || 3000;

application.engine("handlebars", engine({
    defaultLayout: "main",
}));

application.set("view engine", "handlebars");
application.set("views", path.join(__dirname, "../views"));

export class websiteGenerator {

    private startEngines (): void {

        application.use(express.json());
        application.use(express.urlencoded({extended: true}));

    };

    private serverGETmethod (): void {
        application.get('/', accesspage);
    };

    private serverPOSTmethod (): void {

        this.startEngines();
        application.post('/access/feedback', receivedInfo);

    };

    public listen (): void {

        this.serverGETmethod();
        this.serverPOSTmethod();

        application.listen(port, (): void => {
            console.log(`The server is ready: http://localhost:${port}`);
        });

    };

}

const startAll = new websiteGenerator();
startAll.listen();