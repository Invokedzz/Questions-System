import { input } from "@inquirer/prompts";
const ans = await input({ message: "What's your name?" });
console.log(`Hello, ${ans}!`);