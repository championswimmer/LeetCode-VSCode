/*
 * @lc app=leetcode id=1249 lang=typescript
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
interface Parentheses {
  char: string;
  index: number;
}
function minRemoveToMakeValid(s: string): string {
    let stack: Parentheses[] = [];
    let sArr = s.split('');
    
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === '(') {
            stack.push({ char: '(', index: i });
        } else if (sArr[i] === ')') {
            if (stack.length > 0 && stack[stack.length - 1].char === '(') {
                stack.pop();
            } else {
                stack.push({ char: ')', index: i });
            }
        }
    }
    let resArr: string[] = [];
    let invalidIndices = stack.map(p => p.index);
    for (let i = 0; i < sArr.length; i++) {
        if (!invalidIndices.includes(i)) {
            resArr.push(sArr[i]);
        }
    }
    return resArr.join('');
};
// @lc code=end

