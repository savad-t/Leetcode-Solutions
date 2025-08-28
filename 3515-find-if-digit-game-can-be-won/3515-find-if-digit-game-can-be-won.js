/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
    let arr = 0
    let arr1 = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] < 10) {
            arr += nums[i]
        } else {
            arr1 += nums[i]
        }
    }
    if (arr == arr1) {
        return false
    } else {
        return true
    }
};