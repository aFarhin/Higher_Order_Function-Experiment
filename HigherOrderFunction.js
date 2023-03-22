// at first let just declare the Array of boxes with different no. of apples
const boxes = [6, 7, 8, 9, 10];




// 1. write only logic function to add 2 apples in each boxes  (Callback func)

const add = function (boxes) {
    return (boxes + 2);
};





// 1. write only logic function to substract 2 apples from each boxes (Callback func)

const substract = function (boxes) {
    return (boxes - 2);
};



// 1. write only logic function to multiply 2 apples to each boxes  (Callback func)

const multiply = function (boxes) {
    return (boxes * 2);
};




// Now write the Higher Order Function to pass all those callback func as an argument and to return the final
// count of apples return by applying those 3 logics
// passed two arguments- 
// 1. the array(boxes) on which those callback func logics were applied . and passed it as (arr)
// 2. the callback func which will do its work inside the high order function. and passed it as (logic)

const finalCount = function (arr, logic) {
    const count = [];
    for (let i = 0; i < arr.length; i++) {
        count.push(logic(arr[i]));
    }
    return count;
}


// now finally console.log those 3 operations through Higher Order function -

console.log(finalCount(boxes, add));   // output - [ 8, 9, 10, 11, 12]
console.log(finalCount(boxes, substract)); //output - [4, 5, 6, 7, 8]
console.log(finalCount(boxes, multiply)); // output - [ 12, 14, 16, 18, 20]

