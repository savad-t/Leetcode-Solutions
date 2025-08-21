/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let ss = s.split(" ")
    let aa = ss.map(word => word.split("").reverse().join(""))
    let ab = aa.join(" ")
    return ab
};