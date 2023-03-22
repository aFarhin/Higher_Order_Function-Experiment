// at first let just declare the Array of boxes with different no. of apples
const boxes = [6, 7, 8, 9, 10];




// 1. write complete function to add 2 apples in each boxes

const addApples = function (boxes) {
    const finalCount = [];
    for (let i = 0; i < boxes.length; i++) {
        finalCount.push(boxes[i] + 2);
    }
    return finalCount;
}
console.log(addApples(boxes));  // output - [8, 9, 10, 11, 12]




// 2. write complete function to substract 2 apples from each boxes

const substractApples = function (boxes) {
    const finalCount = [];
    for (let i = 0; i < boxes.length; i++) {
        finalCount.push(boxes[i] - 2);
    }
    return finalCount;
}
console.log(substractApples(boxes));  // output - [4, 5, 6, 7,8]





// 3. write complete function to multiply 2 apples to each boxes

const multiplyApples = function (boxes) {
    const finalCount = [];
    for (let i = 0; i < boxes.length; i++) {
        finalCount.push(boxes[i] * 2);
    }
    return finalCount;
}
console.log(multiplyApples(boxes));  // output - [12, 14, 16, 18, 20]