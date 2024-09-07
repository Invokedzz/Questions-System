import { Request, Response, NextFunction } from "express";

import mysql from "mysql2/promise";

import * as dotenv from "dotenv";

import validator from "validator";

dotenv.config({
    path: __dirname + '/file.env' });

const userKey = process.env.SQL_USER;
const passwordKey = process.env.SQL_PASSWORD;

const pool = mysql.createPool({
    host: "localhost",
    user: userKey,
    password: passwordKey,
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

    res.render("accesspage");

};

export const treatError = (req: Request, res: Response, next: NextFunction): void => {

    res.send(404);
    next();

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

            const insertSQL = 'INSERT INTO users (name, email, message) VALUES (?, ?, ?)';
            await connection.query(insertSQL, [name, email, message]);

        } finally {
            connection.release();
        }

        res.render("receivedInfo", {name});
        return true;

    } catch (error) {
        console.error("Erro ao acessar o banco de dados:", error);
        throw new Error("Something went wrong with the database. Try again.");
    };

};
