/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max=0
    for(i=0; i<accounts.length; i++){
        let wealth=accounts[i].reduce((a,b)=>a+b)
        if(wealth>max){
            max=wealth
        }
    }return max
};