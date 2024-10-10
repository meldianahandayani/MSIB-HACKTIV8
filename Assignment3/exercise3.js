function sumArray(arr,int) {
    const pairs = []; 
    const seen = new Set(); 
    for (const num of arr) {
        const complement = int - num; 
        if (seen.has(complement)) {
            pairs.push([complement, num]); 
        }
        seen.add(num); 
    }

    return pairs; 
}
// TEST
console.log(sumArray([2, 1, 3, 4, 5], 5)); // output: [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // output: [[1, 10], [8, 3]]

//MELDIANA HANDAYANI