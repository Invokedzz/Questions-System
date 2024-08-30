import { input } from "@inquirer/prompts"; // Você responder com texto
import { select } from "@inquirer/prompts"; // Você deve selecionar uma opção
import { createSpinner } from "nanospinner";
import path from "path";
import fs, { readFileSync } from "fs";
import { Separator, Choice } from "./interfaces";

export class creatingQuiz  {

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
        [
            { name: 'A) Azul', value: 'A' },
            { name: 'B) Verde', value: 'B' },
            { name: 'C) Vermelho', value: 'C' },
            { name: 'D) Amarelo', value: 'D' },
            { name: 'E) Outro', value: 'E' },
        ],
        'A',
        3

     );

     await this.questionsReceptor(

      'favoriteColor',
      '2) Qual é a sua cor favorita?\n',
      [
          { name: 'A) Azul', value: 'A' },
          { name: 'B) Verde', value: 'B' },
          { name: 'C) Vermelho', value: 'C' },
          { name: 'D) Amarelo', value: 'D' },
          { name: 'E) Outro', value: 'E' },
      ],
      'A',
      3

   );

   await this.questionsReceptor(

    'favoriteColor',
    '3) Qual é a sua cor favorita?\n',
    [
        { name: 'A) Azul', value: 'A' },
        { name: 'B) Verde', value: 'B' },
        { name: 'C) Vermelho', value: 'C' },
        { name: 'D) Amarelo', value: 'D' },
        { name: 'E) Outro', value: 'E' },
    ],
    'A',
    3

 );

 await this.questionsReceptor(

  'favoriteColor',
  '4) Qual é a sua cor favorita?\n',
  [
      { name: 'A) Azul', value: 'A' },
      { name: 'B) Verde', value: 'B' },
      { name: 'C) Vermelho', value: 'C' },
      { name: 'D) Amarelo', value: 'D' },
      { name: 'E) Outro', value: 'E' },
  ],
  'A',
  3

);

await this.questionsReceptor(

  'favoriteColor',
  '5) Qual é a sua cor favorita?\n',
  [
      { name: 'A) Azul', value: 'A' },
      { name: 'B) Verde', value: 'B' },
      { name: 'C) Vermelho', value: 'C' },
      { name: 'D) Amarelo', value: 'D' },
      { name: 'E) Outro', value: 'E' },
  ],
  'A',
  3

);

await this.questionsReceptor(

  'favoriteColor',
  '6) Qual é a sua cor favorita?\n',
  [
      { name: 'A) Azul', value: 'A' },
      { name: 'B) Verde', value: 'B' },
      { name: 'C) Vermelho', value: 'C' },
      { name: 'D) Amarelo', value: 'D' },
      { name: 'E) Outro', value: 'E' },
  ],
  'A',
  3

);

await this.questionsReceptor(

  'favoriteColor',
  '7) Qual é a sua cor favorita?\n',
  [
      { name: 'A) Azul', value: 'A' },
      { name: 'B) Verde', value: 'B' },
      { name: 'C) Vermelho', value: 'C' },
      { name: 'D) Amarelo', value: 'D' },
      { name: 'E) Outro', value: 'E' },
  ],
  'A',
  3

);

  await this.questionsReceptor(

    'favoriteColor',
    '8) Qual é a sua cor favorita?\n',
    [
        { name: 'A) Azul', value: 'A' },
        { name: 'B) Verde', value: 'B' },
        { name: 'C) Vermelho', value: 'C' },
        { name: 'D) Amarelo', value: 'D' },
        { name: 'E) Outro', value: 'E' },
    ],
    'A',
    3

  );

  await this.questionsReceptor(

    'favoriteColor',
    '9) Qual é a sua cor favorita?\n',
    [
        { name: 'A) Azul', value: 'A' },
        { name: 'B) Verde', value: 'B' },
        { name: 'C) Vermelho', value: 'C' },
        { name: 'D) Amarelo', value: 'D' },
        { name: 'E) Outro', value: 'E' },
    ],
    'A',
    3

  );

  await this.questionsReceptor(

    'favoriteColor',
    '10) Qual é a sua cor favorita?\n',
    [
        { name: 'A) Azul', value: 'A' },
        { name: 'B) Verde', value: 'B' },
        { name: 'C) Vermelho', value: 'C' },
        { name: 'D) Amarelo', value: 'D' },
        { name: 'E) Outro', value: 'E' },
    ],
    'A',
    3

  );

      console.log("Quiz concluído!\n");

    };

    async questionsReceptor (

      name: string,
      msg: string,
      choices: any [], // Por algum motivo, nem generics funciona aqui :(
      correctAnswer: string,
      maxAttempts: number
    
    ): Promise <void> {

      let attempts = 0;
      let answer;
      const limit = maxAttempts;
    
      do {

        const questionsOptions = await select({
          message: msg,
          choices: choices,
        });

        answer = questionsOptions;

        if (answer === correctAnswer) console.log(`A resposta certa era ${correctAnswer}. Acertou!\n`);

        if (answer !== correctAnswer) {

          if (attempts < limit) {
            attempts++;
            console.log(`Resposta incorreta! Tente novamente.\n`);
            console.log(`Tentativas restantes: ${limit - attempts}\n`);
          };

          if (limit === attempts) {
        
            console.log(`Você ultrapassou o número de tentativas. Tente novamente.\n`)
            await this.getStarted();
    
          };

        }

      } while(answer !== correctAnswer);
        
    }; 
}

const startClass = new creatingQuiz();
startClass.allFeatures();

export default 1;