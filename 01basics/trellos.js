const toDo = []

toDo.push('Buy Bread')
toDo.push('Go To Gym')
toDo.push('Take Bath')
toDo.push('Lunch')
toDo.push('Code')

toDo.forEach(function(to , i){
    console.log(`The task no. ${i+1} is ${to}`);
})