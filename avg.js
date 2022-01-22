function avgOfArray(arr) {
    let product = 0;
    for (let i = 0; i < arr.length; i++) {
        product += arr[i] / arr.length;
    }
    return arr.length > 0 ? product : 0;
}

// function avgOfArray(array) {
//     let total = 0;
//     let count = 0;
//
//     array.forEach(function(item, index) {
//         total += item;
//         count++;
//     });
//
//     return total / count;
// }



// function avgOfArray(arr){
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     let numCount = arr.length;
//     let sum = arr.reduce(reducer);
//
//     return sum / numCount;
// }

module.exports = avgOfArray;