let todo = [];
let req = prompt("Please enter your request");
while (true) {
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list") {
        console.log("________");
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("_______");
    } else if (req =="add") {
        let task = prompt("please enter your task you want o add");
        todo.push(task);
        console.log("task added");
    } else if(req == "delete") {
        let idx = prompt("Enter task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("wrong input");
    }
    req = prompt("please enter your request");
}