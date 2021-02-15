const months = ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'July' , 'Aug' , 'Sept' , 'Oct' , 'Nov' , 'Dec']

months.forEach(function(month , index){
    if(index == 2){
        months.push('Kes');
        months.push('Kes');
        months.push('Kes');
    }
    console.log(`The ${index+1} Month is ${month}`);
})


//from devdocs.io
// The range of elements processed by forEach() is set before the first invocation of callback. 
// Elements which are appended to the array after the call to forEach() begins will not be visited by callback.
//  If existing elements of the array are changed or deleted, their value as passed to callback will be the value at the time forEach() visits them; elements that are deleted before being visited are not visited. 
// If elements that are already visited are removed (e.g. using shift()) during the iteration, later elements will be skipped.
