import { Request, Response } from "express";

import validator from "validator";

export const homepage = (req: Request, res: Response): void => {
    res.render("homepage");
};

export const aboutpage = (req: Request, res: Response): void => {
    res.render("aboutpage");
};

export const accesspage = (req: Request, res: Response): void => {
    res.render("accesspage")
};

export const receivedInfo = (req: Request, res: Response): boolean => {

    let verifyValues = false;
    let email: string = req.body.email;
    const username: string = req.body.username;
    const message = req.body.message;

    if (!validator.isEmail(email) && username.length <= 0) {
        res.render("receivedInfo", {error: "Por favor, insira um email e um nome de usuário!"});
        return verifyValues;
    };

    if (message.length <= 10 && !message) {
        res.render("receivedInfo", {errormsg: "Por favor, insira uma mensagem válida!"});
        return verifyValues;
    };
    

    res.render("receivedInfo", {username});
    return true;

};