function isArithmeticProgression(arr) {
    if (arr.length < 2) {
        return true; 
    }   
    const difference = arr[1] - arr[0]; 
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== difference) {
            return false; 
        }
    }
    return true; 
}
// Test
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 4, 6, 9])); // false

//MELDIANA HANDAYANI