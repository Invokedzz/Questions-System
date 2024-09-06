import { Request, Response } from "express";

import mysql from "mysql2/promise";

import validator from "validator";

const pool = mysql.createPool({
    host: "localhost",
    user: "Invoked",
    password: "",
    database: "questionsystem",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export const homepage = (req: Request, res: Response): void => {
    res.render("homepage");
};

export const aboutpage = (req: Request, res: Response): void => {
    res.render("aboutpage");
};

export const accesspage = (req: Request, res: Response): void => {
    res.render("accesspage")
};

export const receivedInfo = async (req: Request, res: Response): Promise <void | boolean> => {

    let verifyMessage = false;
    let email: string = req.body.email;
    const name: string = req.body.name;
    const message: string = req.body.message;

    if (!validator.isEmail(email) && !name) {
        verifyMessage = true;
        res.render("receivedInfo", {verifyMessage});
        return verifyMessage;
    };

    if (message.length <= 10 && !message) {
        verifyMessage = true;
        res.render("receivedInfo", {verifyMessage});
        return verifyMessage;
    };

    try {

        const connection = await pool.getConnection();
        
        try {

            const insertSQL = 'INSERT INTO users (name, email) VALUES (?, ?)';
            await connection.query(insertSQL, [name, email]);

        } finally {
            connection.release();
        }

        res.render("receivedInfo", {name});
        return true;

    } catch (error) {
        console.error("Erro ao acessar o banco de dados:", error);
        res.render("receivedInfo", { error: "Ocorreu um erro ao processar sua solicitação." });
    }

};