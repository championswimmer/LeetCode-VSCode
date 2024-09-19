/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 *
 * https://leetcode.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (28.31%)
 * Likes:    12243
 * Dislikes: 2191
 * Total Accepted:    1M
 * Total Submissions: 3.6M
 * Testcase Example:  '"aa"\n"a"'
 *
 * Given an input string s and a pattern p, implement regular expression
 * matching with support for '.' and '*' where:
 * 
 * 
 * '.' Matches any single character.​​​​
 * '*' Matches zero or more of the preceding element.
 * 
 * 
 * The matching should cover the entire input string (not partial).
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "aa", p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "aa", p = "a*"
 * Output: true
 * Explanation: '*' means zero or more of the preceding element, 'a'.
 * Therefore, by repeating 'a' once, it becomes "aa".
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "ab", p = ".*"
 * Output: true
 * Explanation: ".*" means "zero or more (*) of any character (.)".
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length <= 20
 * 1 <= p.length <= 20
 * s contains only lowercase English letters.
 * p contains only lowercase English letters, '.', and '*'.
 * It is guaranteed for each appearance of the character '*', there will be a
 * previous valid character to match.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  strPtr = 0;
  patternPtr = 0;
  
  while (strPtr < s.length) {
    if (s[strPtr] === p[patternPtr] || p[patternPtr] === '.') {
      strPtr++;
      patternPtr++;
    } else if (p[patternPtr] === '*') {
      if (p[patternPtr - 1] === s[strPtr] || p[patternPtr - 1] === '.') {
        strPtr++;
      } else {
        patternPtr++;
        if (p[patternPtr] === p[patternPtr - 2]) {
          patternPtr++;
        }
      }
    } else {
      if (p[patternPtr + 1] === '*') {
        patternPtr += 2;
        continue
      }
      return false;
    }
  }

  if (p[patternPtr] === '*') {
    patternPtr++;
    if (p[patternPtr] === p[patternPtr - 2]) {
      patternPtr++;
    }
  }
   
  if (patternPtr < p.length) {
    return false;
  }
  return true;
};
// @lc code=end

// test 
console.log(isMatch('aaa', 'a*a')); // false
