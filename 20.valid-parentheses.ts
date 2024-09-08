/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (40.86%)
 * Likes:    24325
 * Dislikes: 1803
 * Total Accepted:    5M
 * Total Submissions: 12.3M
 * Testcase Example:  '"()"'
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "()"
 * 
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "()[]{}"
 * 
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "(]"
 * 
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: s = "([])"
 * 
 * Output: true
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length <= 10^4
 * s consists of parentheses only '()[]{}'.
 * 
 * 
 */

// @lc code=start
function isValid(s: string): boolean {
  const sarr = s.split('');
  const stack: string[] = [];
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  for (let i = 0; i < sarr.length; i++) {
    if (stack.length === 0) {
      stack.push(sarr[i]);
    } else {
      if (map[sarr[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(sarr[i]);
      }
    }
  }

  return stack.length === 0;

};
// @lc code=end

