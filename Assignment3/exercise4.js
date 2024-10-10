function arrSum(arr) {
    let maxSum = arr[0]; 
    let currentSum = arr[0]; 
    let start = 0; 
    let end = 0; 
    let tempStart = 0; 

    for (let i = 1; i < arr.length; i++) {
        if (currentSum < 0) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum += arr[i];
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart; 
            end = i; 
        }
    }
    const maxSubArray = arr.slice(start, end + 1);
    return [maxSubArray, maxSum];
}

// TEST
const result = arrSum([-2, -3, 4, -1, -2, 1, 5, -3]);
console.log(result); // Output: [[4, -1, -2, 1, 5], 7]

//MELDIANA HANDAYANI