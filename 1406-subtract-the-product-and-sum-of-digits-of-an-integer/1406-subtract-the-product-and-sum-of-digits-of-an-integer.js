/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let nmbr=n.toString().split("").map(Number)
    let sum=0
    let total=1
    for(i=0; i<nmbr.length; i++){
        sum+=nmbr[i]
        total*=nmbr[i]
    }return total-sum
};