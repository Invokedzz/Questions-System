#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import nanospinner, { createSpinner } from "nanospinner";

export class biblicalQuiz {
    constructor (

    ) {};

    async getStarted () {
        const name = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Qual é o seu nome de usuário?\n",
            },
        ]);
    
        if (!name.name && name.name === "") {
            console.log("Por favor, insira um nome válido!");
            return false;
        };
        
        console.log(`Bem-vindo (a), ${name.name}!\n`);
        console.log(chalk.greenBright("Agora, vamos começar...\n"));

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
            
           // setTimeout(async () => {
                const spinner = createSpinner(`Certo! Vamos começar o quiz!\n`).start();
                spinner.success();
          //  }, 2000);

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
            'Qual é a sua cor favorita?',
            ['Azul', 'Verde', 'Vermelho', 'Amarelo', 'Outro'],
            'Azul', 
            3,
        );

        await this.askQuestion(
            'preferredOS',
            'Qual é o seu sistema operacional preferido?',
            ['Windows', 'macOS', 'Linux', 'Outro'],
            'Linux',
            3,
        );

        await this.askQuestion(
            'musicGenre',
            'Qual tipo de música você mais gosta?',
            ['Rock', 'Pop', 'Jazz', 'Clássica', 'Eletrônica'],
            'Pop',
            3,
        );

        
        await this.askQuestion(
            'hobbiesMenu',
            'Qual é o seu hobbie favorito?',
            ['Futebol', 'Cinema', 'Jogar', 'Cantar', 'Outro'],
            'Cinema',
            3,
        );

        await this.askQuestion(
            'mainChoice',
            'Qual a sua linguagem de programação favorita?',
            ['JavaScript', 'Python', 'C++', 'Java', 'Outro'],
            'Java',
            3,
        );

        await this.askQuestion(
            'favoriteFood',
            'Qual é o seu prato favorito?',
            ['Macarrao', 'Arroz', 'Feijão', 'Carne', 'Outro'],
            'Feijão',
            3,
        );

        await this.askQuestion(
            'favoriteDrink',
            'Qual é a sua bebida favorita?',
            ['Cerveja', 'Vinho', 'Refrigerante', 'Suco', 'Outro'],
            'Outro',
            3,
        );

        await this.askQuestion(
            'favoriteAnimal',
            'Qual é o seu animal favorito?',
            ['Cachorro', 'Gato', 'Cavalo', 'Papagaio', 'Outro'],
            'Cachorro',
            3,
        );

        await this.askQuestion(
            'favoriteSport',
            'Qual é o seu esporte favorito?',
            ['Futebol', 'Volei', 'Basquete', 'Natação', 'Outro'],
            'Outro',
            3,
        );

        await this.askQuestion(
            'favoriteMovie',
            'Qual é o seu filme favorito?',
            ['Um filme', 'Dois filmes', 'Tres filmes', 'Quatro filmes', 'Outro'],
            'Um filme',
            3,
        ); 

        const spinnerFinal = createSpinner(chalk.greenBright(`Muito bem! Você acaba de concluir o quiz! Você acertou todas as questões!\n`)).start();
        spinnerFinal.success();
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