/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 *
 * https://leetcode.com/problems/basic-calculator/description/
 *
 * algorithms
 * Hard (43.79%)
 * Likes:    6363
 * Dislikes: 506
 * Total Accepted:    498.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '"1 + 1"'
 *
 * Given a string s representing a valid expression, implement a basic
 * calculator to evaluate it, and return the result of the evaluation.
 * 
 * Note: You are not allowed to use any built-in function which evaluates
 * strings as mathematical expressions, such as eval().
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "1 + 1"
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = " 2-1 + 2 "
 * Output: 3
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "(1+(4+5+2)-3)+(6+8)"
 * Output: 23
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length <= 3 * 10^5
 * s consists of digits, '+', '-', '(', ')', and ' '.
 * s represents a valid expression.
 * '+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is
 * invalid).
 * '-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is
 * valid).
 * There will be no two consecutive operators in the input.
 * Every number and running calculation will fit in a signed 32-bit integer.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    stack = [];
    let result = 0;
    let number = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c >= '0' && c <= '9') {
            number = number * 10 + parseInt(c);
        } else if (c === '+') {
            result += sign * number;
            number = 0;
            sign = 1;
        } else if (c === '-') {
            result += sign * number;
            number = 0;
            sign = -1;
        } else if (c === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (c === ')') {
            result += sign * number;
            number = 0;
            result *= stack.pop(); // sign
            result += stack.pop(); // result
        }
    }

    if (number !== 0) {
        result += sign * number;
    }

    return result;
};
// @lc code=end

