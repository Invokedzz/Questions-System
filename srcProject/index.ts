import { input } from "@inquirer/prompts"; // Você responder com texto
import { select } from "@inquirer/prompts"; // Você deve selecionar uma opção
import { confirm } from "@inquirer/prompts"; // Confirmar com sim ou não (não sei se vou usar)
import { createSpinner } from "nanospinner";
import path from "path";
import fs, { readFileSync } from "fs";

export class creatingQuiz {
    async getStarted (): Promise <void> {
        const name: string = await input({
            message: "Qual é o seu nome de usuário? \n",
        });

        const username = name.trim();
        const pathInformation = path.join('./srcProject', 'archiveTS.txt');
        const data = readFileSync(pathInformation, 'utf8');

        if (data.split('\n').includes(username)) {
            console.log(`${username} já está registrado! Tente outro nome!`);
            throw new Error ("Tente novamente!");
        };

        fs.appendFile(pathInformation, username + '\n', (err: Error | null): void => {
            if (err && username.length <= 0) return;
        });

        if (!username && username === "") {
            console.log(`Por favor, insira um nome válido!\n'`);
            throw new Error("Tente novamente!");
        };

        console.log(`Bem-vindo (a), ${name}!\n`);
        console.log(`Agora, vamos iniciar...\n`);

    };

    async aboutQuiz (): Promise <void> {
        
      setTimeout((): void => {

            console.log("O objetivo desse quiz é o ensino da Bíblia para os mais jovens. De uma maneira lúdica e divertida!\n");
            console.log("Você pode apoiar esse projeto em: https://github.com/Invokedzz/\n");

        }, 1000);

        setTimeout(async (): Promise <void> => {

          await this.userDecision();
        
        }, 4000);

    };

    async userDecision (): Promise <void> {
        const choice = await select({
            message: "Ainda gostaria de jogar o quiz?\n",
            choices: [
              
              {name: "Sim", 
              value: "start"},
              
              {name: "Não", 
              value: "exit"},

            ],
        });

        if (choice === "start") {
            console.log(`Certo, vamos iniciar o quiz.\n`);
            await this.startQuiz();
        };

        if (choice === "info") await this.aboutQuiz();
        
        if (choice === "exit") {
            await this.exitQuiz();
            return;
        };

    };

    async exitQuiz (): Promise <void> {

        console.log("Obrigado pelo seu tempo!\n");
        process.exit();
    
    };

    async allFeatures (): Promise <void> {
        
        await this.getStarted();

        const displayOptions = await select({
            
          message: "O que você deseja fazer?\n",
            choices: [
              
              {name: "Começar Quiz",
              value: "startQuiz"},

              {name: "Sobre",
              value: "information"},

              {name: "Sair", 
              value: "exit"},

            ],
        });

        if (displayOptions === "startQuiz") {
            setTimeout(async (): Promise <void> => {

              console.log("Tudo bem! Iniciando quiz...\n");
              await this.startQuiz();

            });
        };

        if (displayOptions === "information") await this.aboutQuiz();
        
        if (displayOptions === "exit") {
            console.log("Obrigado pelo seu tempo!\n");
            process.exit();
        };

    };

    async startQuiz (): Promise <void> {
        
      await this.questionsReceptor(
        
        'favoriteColor',
        '1) Qual é a sua cor favorita?\n',
        ['A) Azul', 'B) Verde', 'C) Vermelho', 'D) Amarelo', 'E) Outro'],
        'A) Azul', 
        3,

      );

      await this.questionsReceptor(
        
        'preferredOS',
        '2) Qual é o seu sistema operacional preferido?\n',
        ['A) Windows', 'B) macOS', 'C) Linux', 'D) Outro'],
        'C) Linux',
        3,

      );

      await this.questionsReceptor(
        
        'musicGenre',
        '3) Qual tipo de música você mais gosta?\n',
        ['A) Rock', 'B) Pop', 'C) Jazz', 'D) Clássica', 'E) Eletrônica'],
        'B) Pop',
        3,

      );

      await this.questionsReceptor(
        
        'hobbiesMenu',
        '4) Qual é o seu hobbie favorito?\n',
        ['A) Futebol', 'B) Cinema', 'C) Jogar', 'D) Cantar', 'E) Outro'],
        'B) Cinema',
        3,

      );

      await this.questionsReceptor(
        
        'mainChoice',
        '5) Qual a sua linguagem de programação favorita?\n',
        ['A) JavaScript', 'B) Python', 'C) C++', 'D) Java', 'E) Outro'],
        'D) Java',
        3,

      );

      await this.questionsReceptor(
        
        'favoriteFood',
        '6) Qual é o seu prato favorito?\n',
        ['A) Macarrao', 'B) Arroz', 'C) Feijão', 'D) Carne', 'E) Outro'],
        'C) Feijão',
        3,

      );

      await this.questionsReceptor(
        
        'favoriteDrink',
        '7) Qual é a sua bebida favorita?\n',
        ['A) Cerveja', 'B) Vinho', 'C) Refrigerante', 'D) Suco', 'E) Outro'],
        'E) Outro',
        3,

      );

      await this.questionsReceptor(
        
        'favoriteAnimal',
        '8) Qual é o seu animal favorito?\n',
        ['A) Cachorro', 'B) Gato', 'C) Cavalo', 'D) Papagaio', 'E) Outro'],
        'A) Cachorro',
        3,

      );

      await this.questionsReceptor(
        
        'favoriteSport',
        '9) Qual é o seu esporte favorito?\n',
        ['A) Futebol', 'B) Volei', 'C) Basquete', 'D) Natação', 'E) Outro'],
        'E) Outro',
        3,

      );

      await this.questionsReceptor(

        'favoriteMovie',
        '10) Qual é o seu filme favorito?\n',
        ['A) Um filme', 'B) Dois filmes', 'C) Tres filmes', 'D) Quatro filmes', 'E) Outro'],
        'A) Um filme',
        3,

      );

    };

    async questionsReceptor (

      name: string,
      msg: string,
      choices: string [],
      correctAnswer: string,
      maxAttempts: number
    
    ): Promise <void> {

    };

}

const startClass = new creatingQuiz();
startClass.allFeatures();

export default 1;