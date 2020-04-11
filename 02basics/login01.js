const userId = 'keshavujn@gmail.com'
const password = '2Sainath@colony'
const mobileno = '8989144914'

let checkId = function(id){
    if((id.includes('@')) && (id.endsWith('.com')) && (id.length > 10))
    {
        return true
    }
    return false
}

let checkPass = function(pass){
    let regexp = /^(?=.*\d)(?=.*[!@#$%^&'* "])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return regexp.test(pass)
}

let checkmobile = function(mobile){
    let regexp = /^[7-9][0-9]{9}$/

    return regexp.test(mobile)
}

console.log(checkId(userId))
console.log(checkPass(password))
console.log(checkmobile(mobileno))