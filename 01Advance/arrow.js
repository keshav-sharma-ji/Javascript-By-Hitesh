// let arrow = (name) => name.length > 5 ? `${name} contains more than 5 character`:`${name} contains less than 5 character`

// console.log(arrow('Keshav'))


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
    state: true,
},
{
    title: 'Coding',
    state: false,
},
{
    title: 'Read current News',
    state: true,
},
{
    title: 'Take Meetings',
    state: false,
},
{
    title: 'Go to Music Classes',
    state: false,
},
{
    title: 'Netflix',
    state: true,
}]


const pendingTodo = newTodo.filter((todo) => todo.state === false)

pendingTodo.forEach((todo) => console.log(todo.title))
