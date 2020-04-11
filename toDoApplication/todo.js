var ul = document.getElementById('list')
// console.log(ul.getElementsByTagName("li").length)
var li

var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

var removeAllButton = document.getElementById('removeAll')
removeAllButton.addEventListener('click',removeAllItem)

function addItem(){
    var input = document.getElementById('input')
    var item = input.value
    var textnode = document.createTextNode(item)

    if(item === '')
    {
        return false
    }
    else
    {
        
        li = document.createElement('li')
        
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id','check')

        var label = document.createElement('label')

        // ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])
        li.className = 'mycheck';
        input.value = ''
    

    }

}

function removeItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        // console.log(li[index])
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
        
    }

    //We can also use
    // for (let index = li.length-1; index >= 0; index--) {
    //     if(li[index].children[0].checked)
    //     {
    //         ul.removeChild(li[index])
    //     }
    // }
}

function removeAllItem(){
    li = ul.children
    for (let index = 0; index < li.length;) {
        ul.removeChild(li[index]) 
              
    }
}