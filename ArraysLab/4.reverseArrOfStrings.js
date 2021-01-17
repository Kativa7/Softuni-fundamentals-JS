function reverseString(arr){
    for(i = 0; i < arr.length / 2; i++){
        let oldElement = arr[i];
        let previousIndex = arr.length - 1 - i;
        arr[i] = arr[previousIndex];
        arr[previousIndex] = oldElement;
        
    }
    console.log(arr.join(' '))
}

reverseString(['a', 'b', 'c', 'd', 'e'])