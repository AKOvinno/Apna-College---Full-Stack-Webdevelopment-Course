let todo = [];

let req = prompt("Please enter your request");

console.log(req);

while(true) {
    if(req === 'quit') {
        console.log('quitting app');
        break;
    }
    else if(req === 'list') {
        console.log('------------------');
        for(i in todo) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log('------------------');
    }
    else if(req === 'add') {
        let task = prompt("Please enter task you want to add");
        todo.push(task);
        console.log('task added');
    }
    else if(req === 'delete') {
        let task = prompt("Please enter task you want to delete");
        todo.splice(task, 1);
    }
    else {
        console.log('Wrong Request!');
    }
    req = prompt("Please enter your request");
}