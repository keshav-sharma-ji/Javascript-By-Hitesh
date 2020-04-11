let myTodo = {
    day: 'Monday',
    meetingsTodo : 0,
    meetingDone : 0,
}

let meetAdd = function(todo , meet = 0){
    todo.meetingsTodo += meet 
}

let meetSub = function(todo , meet = 0){
    todo.meetingDone += meet
}

let reset = function(todo){
    todo.meetingDone = 0
    todo.meetingsTodo = 0
}

let summaryOfDay = function(todo){
    let result = todo.meetingsTodo - todo.meetingDone
    return `Total Number of meetings pending for ${todo.day} are: ${result}`
}


meetAdd(myTodo , 4)
meetAdd(myTodo , 2)
meetAdd(myTodo , 6)

meetSub(myTodo , 3)
meetSub(myTodo , 1)
meetSub(myTodo , 2)

console.log(summaryOfDay(myTodo));
