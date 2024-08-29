#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import path from "path";
import fs from "fs";
import nanospinner, { createSpinner } from "nanospinner";
import figlet from "figlet";
import gradientString from "gradient-string";
// import chalkAnimation from "chalk-animation";

export class biblicalQuiz {
    constructor (

    ) {};

    async getStarted () {
        const name = await inquirer.prompt([
            {
                type: "input",
                name: "user",
                message: "Qual é o seu nome de usuário?\n",
            },
        ]);

        const username = name.user.trim();
        const pathInfo = path.join('./src', 'archive.txt');

        const data = fs.readFileSync(pathInfo, 'utf8');
        if (data.split('\n').includes(username)) {
            console.log(chalk.red(`${username} já está registrado! Escolha outro nome.`));
            throw new Error(chalk.redBright("Tente novamente!"));
        };

        fs.appendFile(pathInfo, username + '\n', (err) => {
            if (err && username.length <= 0) return;
        });

        if (!username && username == "") {
            console.log(chalk.red("Por favor, insira um nome válido!\n"));
            throw new Error(chalk.redBright("Tente novamente!"));
        };
        
        console.log(chalk.blueBright(`Bem-vindo (a), ${username}!\n`));
        console.log((`Agora vamos iniciar...\n`));

    };

    async aboutQuiz () {

        setTimeout(() => {

            console.log(chalk.greenBright("O objetivo desse quiz é o ensino da Bíblia para os mais jovens. De uma maneira lúdica e divertida!"));
            console.log("Você pode apoiar esse projeto em: https://github.com/Invokedzz");

        }, 1000);

        setTimeout(async() => {

            await this.userDecision();
        
        }, 4000);
    };

    async userDecision () {
        const decision = await inquirer.prompt([
            {
                type: "list",
                name: "decisions",
                message: "Você gostaria de jogar o quiz?",
                choices: ["Sim", "Não"],
            },

        ]);

        if (decision.decisions === "Sim") { 
            
                const spinner = createSpinner(`Certo! Vamos começar o quiz!\n`).start();
                spinner.success();

                await this.startQuiz();
        };

        await this.exitQuiz();

    };

    async exitQuiz () {

        console.log(chalk.blueBright("Obrigado pelo seu tempo!"));
        process.exit();
    
    };

    async features () {
         
            await this.getStarted();

                    const showOptions = await inquirer.prompt([

                        {
                            type: "list",
                            name: "features",
                            message: "O que você deseja fazer?",
                            choices: ["Começar Quiz", "Sobre", "Sair"],
                        },
    
                    ]);

                if (showOptions.features === "Começar Quiz") {

                    setTimeout(async () => {

                        console.log(`Certo... Vamos começar o quiz!\n`);
                        await this.startQuiz();
                    
                    }, 2000);

                };

                if (showOptions.features === "Sobre") await this.aboutQuiz();

                if (showOptions.features === "Sair") {
                    console.log("Agradecemos a sua visita!");
                    process.exit();
                };

    };

    async startQuiz () {

        await this.askQuestion(
            'favoriteColor',
            '1) Qual é a sua cor favorita?\n',
            ['A) Azul', 'B) Verde', 'C) Vermelho', 'D) Amarelo', 'E) Outro'],
            'A) Azul', 
            3,
        );

        await this.askQuestion(
            'preferredOS',
            '2) Qual é o seu sistema operacional preferido?\n',
            ['A) Windows', 'B) macOS', 'C) Linux', 'D) Outro'],
            'C) Linux',
            3,
        );

        await this.askQuestion(
            'musicGenre',
            '3) Qual tipo de música você mais gosta?\n',
            ['A) Rock', 'B) Pop', 'C) Jazz', 'D) Clássica', 'E) Eletrônica'],
            'B) Pop',
            3,
        );

        
        await this.askQuestion(
            'hobbiesMenu',
            '4) Qual é o seu hobbie favorito?\n',
            ['A) Futebol', 'B) Cinema', 'C) Jogar', 'D) Cantar', 'E) Outro'],
            'B) Cinema',
            3,
        );

        await this.askQuestion(
            'mainChoice',
            '5) Qual a sua linguagem de programação favorita?\n',
            ['A) JavaScript', 'B) Python', 'C) C++', 'D) Java', 'E) Outro'],
            'D) Java',
            3,
        );

        await this.askQuestion(
            'favoriteFood',
            '6) Qual é o seu prato favorito?\n',
            ['A) Macarrao', 'B) Arroz', 'C) Feijão', 'D) Carne', 'E) Outro'],
            'C) Feijão',
            3,
        );

        await this.askQuestion(
            'favoriteDrink',
            '7) Qual é a sua bebida favorita?\n',
            ['A) Cerveja', 'B) Vinho', 'C) Refrigerante', 'D) Suco', 'E) Outro'],
            'E) Outro',
            3,
        );

        await this.askQuestion(
            'favoriteAnimal',
            '8) Qual é o seu animal favorito?\n',
            ['A) Cachorro', 'B) Gato', 'C) Cavalo', 'D) Papagaio', 'E) Outro'],
            'A) Cachorro',
            3,
        );

        await this.askQuestion(
            'favoriteSport',
            '9) Qual é o seu esporte favorito?\n',
            ['A) Futebol', 'B) Volei', 'C) Basquete', 'D) Natação', 'E) Outro'],
            'E) Outro',
            3,
        );

        await this.askQuestion(
            'favoriteMovie',
            '10) Qual é o seu filme favorito?\n',
            ['A) Um filme', 'B) Dois filmes', 'C) Tres filmes', 'D) Quatro filmes', 'E) Outro'],
            'A) Um filme',
            3,
        ); 

        const msgFinal = `Conseguiu concluir o quiz!`;
        setTimeout(() => {
            figlet(msgFinal, (err, data) => {
                if (err) return;
                console.log(gradientString.pastel(data)); 
            });
        }, 1000);
    }

    async askQuestion (name, message, choices, correctAnswer, maxAttempts) {
        let attempts = 0;
        let answer;
        const limit = maxAttempts;
        do {
            const response = await inquirer.prompt([
                {
                    type: 'list',
                    name: name,
                    message: message,
                    choices: choices,
                },
            ]);

            answer = response [name];

            if (answer === correctAnswer) {
                const spinnerRight = createSpinner(chalk.green(`A resposta certa era ${correctAnswer}. Você acertou!`)).start();
                spinnerRight.success();
            };

            if (answer !== correctAnswer) {

                if (attempts < limit) {
                    attempts++;
                    console.log(chalk.redBright("Resposta incorreta! Tente novamente.\n"));
                    console.log(`Tentativas restantes: ${limit - attempts}\n`);
                };

                if (attempts === limit) {
                    console.log(chalk.redBright("Tentativas esgotadas. Voltando para a tela inicial.\n"));
                    await this.getStarted();
                };

            };


        } while (answer !== correctAnswer);

    };        
}


const startQuiz = new biblicalQuiz();
startQuiz.features();