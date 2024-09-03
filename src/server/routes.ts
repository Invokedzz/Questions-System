import { Request, Response } from "express";

export const accesspage = (req: Request, res: Response): void => {
    res.render("accesspage")
};

export const receivedInfo = (req: Request, res: Response): void => {

    const user = req.body.user;
    const username = req.body.username;

    if (user && username) res.render("receivedInfo", {user, username});
    return;

};