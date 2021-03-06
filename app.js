const chalk = require("chalk") //imported chalk
const yargs = require("yargs") //imported yargs


.command("create", "Create New TODO", {
    title: {
       description: "TODO Title",
       type: "string",
       demandOption: true,
    },
    body: {
        description: "TODO Body",
        type: "string",
        demandOption: true,
     },
})
.command("list", "List All To TODO")
.command("show", "Show Single TODO By Index", {
    index: {
        description: "TODO index",
        type: "string",
        demandOption: true,
    }
})
.command("remove", "Remove Single TODO By Index", {
    index: {
        description: "TODO index",
        type: "string",
        demandOption: true,
    }
})
.command("toggle", "Toggle Single Completed Status TODO By Index", {
    index: {
        description: "TODO index",
        type: "string",
        demandOption: true,
    }
})

.argv; 

console.log(`\n===${chalk.green("TODO App Launched")}===\n`);

const Todo = require("./todo");


//Get command
const command = yargs._[0];

//If command is crate
if (command === "create") {
    //Create Todo
    Todo.create(yargs.title, yargs.body);

    console.log(chalk.green("Todo is created"));
}



//TODO
// --Title
// --Body
// --Completed