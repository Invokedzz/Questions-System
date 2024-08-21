import { input } from "@inquirer/prompts";

const ans = input({
    message: 'Enter your name'
});

console.log(ans);