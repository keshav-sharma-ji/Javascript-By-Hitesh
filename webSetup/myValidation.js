function myValidation(){
    
    // const value = document.getElementById('val').value
    // let result = document.createElement('h5')
    // if(isNaN(value) || value < 1 || value >10)
    // {
    //     result.textContent = 'Not Valid!'
    // }
    // else{
    //     result.textContent = 'Valid'
    // }
    // document.querySelector('body').appendChild(result)


    const value = document.querySelector('#val').value
    let temp = document.querySelector('#res')
    if (isNaN(value) || value < 1 || value >10) {
        temp.textContent = 'Not Valid'
    }
    else{
        temp.textContent = 'Valid'
    }


}


//Finally done it mast he
// document.querySelector('#val').addEventListener('input',(event)=>{
//     let res = document.querySelector('#res')
//     if (isNaN(event.target.value) || event.target.value < 1 || event.target.value > 10) {
//         res.textContent = "Not Valid!"
//     }
//     else{
//         res.textContent = "Valid"
//     }
// })