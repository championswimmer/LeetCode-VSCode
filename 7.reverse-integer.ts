/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Medium (30.06%)
 * Likes:    15718
 * Dislikes: 14024
 * Total Accepted:    5.2M
 * Total Submissions: 16.2M
 * Testcase Example:  '123'
 *
 * Given a signed 32-bit integer x, return x with its digits reversed. If
 * reversing x causes the value to go outside the signed 32-bit integer range
 * [-2^31, 2^31 - 1], then return 0.
 * 
 * Assume the environment does not allow you to store 64-bit integers (signed
 * or unsigned).
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: x = 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: x = -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: x = 120
 * Output: 21
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * -2^31 <= x <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
function reverse(x: number): number {
  const INT_MAX = 2 ** 31 - 1;
  const isNeg = x < 0; 
  let absNum = isNeg ? -x : x;
  let reversedNum = 0;

  while (absNum > 0) {
    const lastDigit = absNum % 10;

    if (reversedNum > INT_MAX / 10 || (reversedNum === INT_MAX / 10 && lastDigit > 7)) {
      return 0;
    }
    
    
    reversedNum = reversedNum * 10 + lastDigit;
    absNum = Math.floor(absNum / 10);

    
  }

  if (isNeg) {
    reversedNum = -reversedNum;
  }

  return reversedNum;


};
// @lc code=end

