import { input } from "@inquirer/prompts"; // Você responder com texto
import { select } from "@inquirer/prompts"; // Você deve selecionar uma opção
import { confirm } from "@inquirer/prompts"; // Confirmar com sim ou não (não sei se vou usar)
import { createSpinner } from "nanospinner";
import path from "path";
import fs from "fs";
//import chalk from "chalk";

export class creatingQuiz {
    async getStarted (): Promise <void> {
        const name = await input({
            message: "Qual é o seu nome de usuário? \n",
        });

        console.log(`Bem-vindo (a), ${name}!\n`);

    };
};

const startClass = new creatingQuiz();
startClass.getStarted();

export default 1;