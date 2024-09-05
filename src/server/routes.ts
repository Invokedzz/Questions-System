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

    let verifyValues = false;
    let email: string = req.body.email;
    const name: string = req.body.username;
    const message: string = req.body.message;

    if (!validator.isEmail(email) && name.trim().length <= 0) {
        res.render("receivedInfo", {error: "Por favor, insira um email e um nome de usuário!"});
        return verifyValues;
    };

    if (message.length <= 10 && !message) {
        res.render("receivedInfo", {errormsg: "Por favor, insira uma mensagem válida!"});
        return verifyValues;
    };

    try {

        const connection = await pool.getConnection();
        try {
            const insertSQL = 'INSERT INTO users (name, email) VALUES (?, ?)';
            await connection.query(insertSQL, [name, email]);

        } finally {
            connection.release();
        }

        res.render("receivedInfo", { name });
        return true;

    } catch (error) {
        console.error("Erro ao acessar o banco de dados:", error);
        res.render("receivedInfo", { error: "Ocorreu um erro ao processar sua solicitação." });
    }

};