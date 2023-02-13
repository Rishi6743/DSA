/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let temp = x;
    let res = "";
    while (temp > 0) {
        let rem = temp % 10;
        res += rem;
        temp = parseInt(temp / 10);
    }
    return res == x ? true : false;
};

let x = isPalindrome(121);
console.log(x)