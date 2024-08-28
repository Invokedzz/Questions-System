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
            await this.features();
        }, 4000);
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

                if (showOptions.features === "Start Quiz") console.log("Hi!");

                if (showOptions.features === "About") await this.aboutQuiz();

                if (showOptions.features === "Exit") {
                    console.log("Thanks for playing!");
                    process.exit();
                }

    }

}

const startQuiz = new biblicalQuiz();
startQuiz.features();