var string1 = 'Hi i am Keshav '
var string2 = 'Hi i am aryan '
var string3 = 'Hi i am satyam '

console.log(string1.length)

console.log(String.fromCharCode(97)) //Does not need string here just use String class

console.log(string1.charAt(8)) //takes index

console.log(string1.charCodeAt(5)) //takes index

console.log(string1.concat(string2 , ' || ' , string3))

console.log(string1.endsWith('keshav' , 14))

console.log(string1.includes('am')) //this is case sensitive

console.log(string1.indexOf('keshav')) //gives index of first occurence for next use position concept read syntax
console.log(string1.indexOf('i' , 4))

string2 = 'hi i am aryan am i'

console.log(string2.lastIndexOf('am')) //gives index of last occurence

// string1.localeCompare('am')

let regexp = /[A-Z]/g
console.log(regexp.test(string1))
console.log(string1.match(regexp)) //Dought: Ask what is the return type of match function
// console.log(typeof(string1.match(regexp)))

console.log(string1.padEnd(40,'.'))
console.log((string1.padEnd(40,'.')).length)

console.log(string1.padStart(40,'.')) //str.padStart(targetLength [, padString])

console.log(string1.repeat(5)) //str.repeat(count)

regexp = /i/gi
console.log(string1.replace(regexp , 'I')) //var newStr = str.replace(regexp|substr, newSubstr|function)


string3 = 'Hi i am .'


regexp = /[^\w\s]/
console.log(string3.search(regexp)) //str.search(regexp)


console.log(string1.slice(8,14)) //str.slice(beginIndex[, endIndex]) endIndex calculate by adding beginIndex with length required in string

console.log(string1.split(' ')) //str.split([separator[, limit]])

console.log(string1.startsWith('Hi')) //str.startsWith(searchString[, position]) Case sensitive

console.log(string1.substring(8,14)) //str.substring(indexStart[, indexEnd])

console.log(string1.toLocaleLowerCase()) //str.toLocaleLowerCase([locale, locale, ...])

console.log(string1.toLocaleUpperCase()) //str.toLocaleUpperCase([locale, locale, ...])

console.log(string1.toLowerCase()) //str.toLowerCase()

console.log(string1.toUpperCase()) //str.toUpperCase()

let obj = new String('Hi i am also keshav')
console.log(obj.toString()) //str.toString()


string2 = "    i  i   "
console.log(string2.trim()) //str.trim()

console.log(string2.trimStart()) //str.trimStart(); str.trimLeft();

console.log(string2.trimEnd())  //str.trimEnd();  str.trimRight();

