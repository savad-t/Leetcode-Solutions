/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num<10){
        return num
    }
    let digits=num.toString().split("").map(Number)
    let sum=digits.reduce((a,b)=>a+b)
    return addDigits(sum)
};