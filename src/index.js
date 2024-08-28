import inquirer from "inquirer";
import chalk from "chalk";
// Opções podem ser: "Start Quiz", "About", "Exit"

export class biblicalQuiz {
    constructor (

    ) {};

    async getStarted () {
        const name = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?"
            },
        ]);
    
        if (!name.name && name.name === "") {
            console.log("Please, insert a valid name!");
            return false;
        };
        
        console.log(`Welcome to our quiz, ${name.name}!`);
        console.log(chalk.greenBright("Now, let's get started!"));

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
                message: "Do you want to play?",
                choices: ["Yes", "No"],
            },

        ]);

        if (decision.decisions === "Yes") await this.startQuiz();
        await this.exitQuiz();

    };

    async exitQuiz () {
        console.log(chalk.blueBright("Thanks for your time!"));
        process.exit();
    };

    async features () {
         
            await this.getStarted();
            // await this.startQuiz();


                const showOptions = await inquirer.prompt([
                    {
                        type: "list",
                        name: "features",
                        message: "What would you like to do?",
                        choices: ["Start Quiz", "About", "Exit"],
                    },


        
                ]);

                if (showOptions.features === "Start Quiz") {

                    setTimeout(async () => {
                        console.log(`Alright! Let's start the quiz!`);
                        await this.startQuiz();
                    }, 2000);

                };

                if (showOptions.features === "About") await this.aboutQuiz();

                if (showOptions.features === "Exit") {
                    console.log("Thanks for playing!");
                    process.exit();
                };

    };

    async startQuiz () {
        const allquestions = await inquirer.prompt([
            {
                type: 'list',
                name: 'favoriteColor',
                message: 'Qual é a sua cor favorita?',
                choices: ['Azul', 'Verde', 'Vermelho', 'Amarelo', 'Outro'],
            },

            {
                type: 'list',
                name: 'preferredOS',
                message: 'Qual é o seu sistema operacional preferido?',
                choices: ['Windows', 'macOS', 'Linux', 'Outro'],
            },

            {
                type: 'list',
                name: 'musicGenre',
                message: 'Qual tipo de música você mais gosta?',
                choices: ['Rock', 'Pop', 'Jazz', 'Clássica', 'Eletrônica']
            },
                
        ]);

        if (allquestions.favoriteColor !== 'Azul') {
            console.log(chalk.red("Try Again!"));
            return;
        };

        if (allquestions.preferredOS !== 'Linux') {
            console.log(chalk.red("Try Again!"));
            return;
        };

        if (allquestions.musicGenre !== 'Pop') {
            console.log(chalk.red("Try Again!"));
            return;
        };
        
        console.log(chalk.greenBright("Well Done!"));

    };

}

const startQuiz = new biblicalQuiz();
startQuiz.features();