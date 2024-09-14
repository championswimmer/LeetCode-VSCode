/*
 * @lc app=leetcode id=1249 lang=javascript
 *
 * [1249] Minimum Remove to Make Valid Parentheses
 *
 * https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/
 *
 * algorithms
 * Medium (69.16%)
 * Likes:    6915
 * Dislikes: 146
 * Total Accepted:    774.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '"lee(t(c)o)de)"'
 *
 * Given a string s of '(' , ')' and lowercase English characters.
 * 
 * Your task is to remove the minimum number of parentheses ( '(' or ')', in
 * any positions ) so that the resulting parentheses string is valid and return
 * any valid string.
 * 
 * Formally, a parentheses string is valid if and only if:
 * 
 * 
 * It is the empty string, contains only lowercase characters, or
 * It can be written as AB (A concatenated with B), where A and B are valid
 * strings, or
 * It can be written as (A), where A is a valid string.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "lee(t(c)o)de)"
 * Output: "lee(t(c)o)de"
 * Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "a)b(c)d"
 * Output: "ab(c)d"
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "))(("
 * Output: ""
 * Explanation: An empty string is also valid.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length <= 10^5
 * s[i] is either '(' , ')', or lowercase English letter.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    sArr = s.split('');
    outArr = [];
    open = 0;
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] !== '(' && sArr[i] !== ')') {
            outArr.push(sArr[i]);
        }
        if (sArr[i] === '(') {
            open++;
            outArr.push(sArr[i]);
        }
        if (sArr[i] === ')') {
            if (open === 0) {
                continue;
            }
            open--;
            outArr.push(sArr[i]);
        }
    }
    while (open > 0) {
        let idx = outArr.lastIndexOf('(');
        outArr.splice(idx, 1);
        open--;
    }
    return outArr.join('');
};
// @lc code=end

