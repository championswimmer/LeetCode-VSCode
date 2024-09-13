/*
 * @lc app=leetcode id=227 lang=javascript
 *
 * [227] Basic Calculator II
 *
 * https://leetcode.com/problems/basic-calculator-ii/description/
 *
 * algorithms
 * Medium (44.07%)
 * Likes:    6177
 * Dislikes: 855
 * Total Accepted:    673.8K
 * Total Submissions: 1.5M
 * Testcase Example:  '"3+2*2"'
 *
 * Given a string s which represents an expression, evaluate this expression
 * and return its value.
 *
 * The integer division should truncate toward zero.
 *
 * You may assume that the given expression is always valid. All intermediate
 * results will be in the range of [-2^31, 2^31 - 1].
 *
 * Note: You are not allowed to use any built-in function which evaluates
 * strings as mathematical expressions, such as eval().
 *
 *
 * Example 1:
 * Input: s = "3+2*2"
 * Output: 7
 * Example 2:
 * Input: s = " 3/2 "
 * Output: 1
 * Example 3:
 * Input: s = " 3+5 / 2 "
 * Output: 5
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 3 * 10^5
 * s consists of integers and operators ('+', '-', '*', '/') separated by some
 * number of spaces.
 * s represents a valid expression.
 * All the integers in the expression are non-negative integers in the range
 * [0, 2^31 - 1].
 * The answer is guaranteed to fit in a 32-bit integer.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {

  stack = [];
  let num = 0;
  let sign = '+';
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i]) && s[i] !== ' ') {
      num = num * 10 + parseInt(s[i]);
    }
    if (isNaN(s[i]) || i === s.length - 1) {
      if (sign === '+') {
        stack.push(num);
      } else if (sign === '-') {
        stack.push(-num);
      } else if (sign === '*') {
        stack.push(stack.pop() * num);
      } else if (sign === '/') {
        stack.push(parseInt(stack.pop() / num));
      }
      sign = s[i];
      num = 0;
    }
  }
  return stack.reduce((acc, cur) => acc + cur, 0);
}

// @lc code=end
