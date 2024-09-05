import path from "path";

import express from "express";

import nodemailer from "nodemailer";

import mysql from "mysql";

import "colorts/lib/string";

import { engine } from "express-handlebars";

import { homepage } from "./routes";

import { aboutpage } from "./routes";

import { accesspage } from "./routes";

import { receivedInfo } from "./routes";

const application = express();
const port = process.env.PORT || 3000;

mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "questionsystem",
});

application.engine("handlebars", engine({
    defaultLayout: "main",
    partialsDir: [path.join(__dirname, "../views/partials")],
}));

application.set("view engine", "handlebars");
application.set("views", path.join(__dirname, "../views"));

application.use(express.static('public'));


export class websiteGenerator {

    private startEngines (): void {

        application.use(express.json());
        application.use(express.urlencoded({extended: true}));

    };

    private serverGETmethod (): void {

        application.get('/', homepage);
        application.get('/about', aboutpage);
        application.get('/access', accesspage);

    };

    private serverPOSTmethod (): void {

        this.startEngines();
        application.post('/access/feedback', receivedInfo);

    };

    public listen (): void {

        this.serverGETmethod();
        this.serverPOSTmethod();

        application.listen(port, async (): Promise <void> => {

            try {

                console.log(`Preparando a inicialização do servidor. Por favor aguarde...`.yellow.bold);

                setTimeout(async (): Promise <void> => {
                    const { default: open } = await import ("open");
                    await open(`http://localhost:${port}`);
                }, 3500);

            } catch (e) {

                console.error(e);
                throw new Error("Something went wrong... Try again.".red);

            };

        });

    };

}
