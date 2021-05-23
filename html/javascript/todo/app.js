console.log("Hello u fuck");

let todo = [];
let cmd = ""
while (cmd != "gay") {
    cmd = prompt("type what of what u want to add to the list\ncmd = 'new', 'list', 'delete'\nTo quit, admit what you are (hint: 3 letters")
    if (cmd === "new") {
        todo = [];

    } else if (cmd === "list") {
        console.log("********************");
        for (i = 0; i < todo.length; i++) {
            console.log(`[${i}]: ${todo[i]}`);
        }
        console.log("********************");
    } else if (cmd === "delete") {    
        index = parseInt(prompt("Type the index you want to remove"))
        todo.splice(index, 1)
    } else {
        todo.push(cmd)
    }
}
