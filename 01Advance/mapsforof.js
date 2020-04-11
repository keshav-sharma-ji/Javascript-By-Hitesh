var john = {
    name: 'I am John',
    age: 24,
    isActive: true
}

var marry = {
    name: 'I am Marry',
    age: 22,
    isActive: false
}

var sam = {
    name: 'I am Sam',
    age: 29,
    isActive: false
}

let users = new Map()

users.set('john',john)
users.set('marry',marry)
users.set('sam',sam)

console.log(users)
console.log(users.size) //major difference between objects and maps

console.log(users.get('sam'))

console.log(users.keys())

console.log(users.values())

for (const key of users.keys()) {
    console.log(key)
}

for (const value of users.values()) {
    console.log(value.name + ' || ' + value.age)
}

for (const [key , value] of users.entries()) {
    console.log(`key: ${key} Value: ${value.name}`)
}