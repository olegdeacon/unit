function countOfNumbers(arr){
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") count++;
    }
    return count;
}

module.exports = countOfNumbers