function threeStepsAB(str) {
    for (let i = 0; i < str.length - 4; i++) {
        if ((str[i] === 'a' && str[i + 4] === 'b') || (str[i] === 'b' && str[i + 4] === 'a')) {
            return true;
        }
    }
    return false;
}
// TEST
console.log(threeStepsAB('lane borrowwed')); // true
console.log(threeStepsAB('i am sick')); //false
console.log(threeStepsAB('you are boring')); //true
console.log(threeStepsAB('barbarian')); //true
console.log(threeStepsAB('bacon and meat')); //false

//MELDIANA HANDAYANI
