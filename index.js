#! /usr/bin/env node
import inquirer from "inquirer";
let toDo = [];
let condition = true;
while (condition) {
    let toDoList = await inquirer.prompt([
        {
            message: "What do u want to add in your to do list : ",
            name: "Question1",
            type: "input",
        },
        {
            message: "Do you have more things to add in your to do  list :",
            type: "confirm",
            name: "Question2",
            default: false,
        }
    ]);
    toDo.push(toDoList.Question1);
    condition = toDoList.Question2;
}
console.log(toDo);
