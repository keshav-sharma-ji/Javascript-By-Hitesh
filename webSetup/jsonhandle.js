var student = {
    name: 'keshav',
    age: 24,
    isActive: true
}

console.log(student)

var studentObjToString = JSON.stringify(student)

console.log(typeof(studentObjToString))
console.log(studentObjToString)

var stringToObj = JSON.parse(studentObjToString)

console.log(typeof(stringToObj))
console.log(stringToObj)