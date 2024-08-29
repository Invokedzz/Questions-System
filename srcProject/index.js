import inquirer from 'inquirer';
async function askQuestions() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Qual é o seu nome?',
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Você está pronto para continuar?',
            default: true,
        },
    ]);
    console.log(answers);
}
askQuestions();
