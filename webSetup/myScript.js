// var element = document.querySelector('p')
// element.textContent = 'I am being changed using JS'
// console.log(element)

const pElements = document.querySelectorAll('p')

pElements.forEach((p) => p.textContent = 'I have been changed using loops in js')

// pElements.forEach((p) => p.remove())

const newElement = document.createElement('h2')
newElement.textContent = 'I have been created using js'

// console.log(typeof(newElement))

document.querySelector('body').appendChild(newElement)

document.querySelector('button').addEventListener('click',(event) =>{
    // console.log('Button was clicked')
    // console.log(event)
    // let newElement = document.createElement('h1')
    // newElement.textContent = 'This is created using js by clicking'
    
    // document.querySelector('body').appendChild(newElement)
    event.target.textContent = 'Changed!!'
})