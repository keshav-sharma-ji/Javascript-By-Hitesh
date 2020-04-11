
let newTodo = [{
    title: 'Ready your Bag',
    state: false,
},
{
    title: 'Go to Gym',
    state: false,
},
{
    title: 'Lunch',
    state: false,
},
{
    title: 'Coding',
    state: false,
}]

let updateTodo = function(myTodo , title){
    let findtitle = myTodo.find(function(todo , index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })

    findtitle.state = true
    // return findtitle
}

updateTodo(newTodo , 'coding')
updateTodo(newTodo , 'lunch')
console.log(newTodo)