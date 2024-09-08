/*
 * @lc app=leetcode id=43 lang=typescript
 *
 * [43] Multiply Strings
 *
 * https://leetcode.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (40.81%)
 * Likes:    7116
 * Dislikes: 3383
 * Total Accepted:    845.4K
 * Total Submissions: 2.1M
 * Testcase Example:  '"2"\n"3"'
 *
 * Given two non-negative integers num1 and num2 represented as strings, return
 * the product of num1 and num2, also represented as a string.
 * 
 * Note: You must not use any built-in BigInteger library or convert the inputs
 * to integer directly.
 * 
 * 
 * Example 1:
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 * Example 2:
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= num1.length, num2.length <= 200
 * num1 and num2 consist of digits only.
 * Both num1 and num2 do not contain any leading zero, except the number 0
 * itself.
 * 
 * 
 */

// @lc code=start
function multiply(num1: string, num2: string): string {
    if (num1 === '0' || num2 === '0') return '0';
    const m = num1.length;
    const n = num2.length;
    const result = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = charToNum(num1[i]) * charToNum(num2[j]);
            const sum = mul + result[i + j + 1];
            result[i + j] += Math.floor(sum / 10);
            result[i + j + 1] = sum % 10;
        }
    }
    return result.join('').replace(/^0+/, '');
};

function charToNum(c: string): number {
    return c.charCodeAt(0) - '0'.charCodeAt(0);
}
// @lc code=end

