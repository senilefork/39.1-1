const choice = (arr) => {
    //get a random index number from the array that is passed
    let randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex];
}

const remove = (arr, element) => {
    let item;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === element){
            item = arr[i];
            arr.splice(i, 1)
        }
    }
    return item
}


export { choice, remove }