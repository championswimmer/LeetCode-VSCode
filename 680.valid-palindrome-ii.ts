/*
 * @lc app=leetcode id=680 lang=typescript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
function validPalindrome(s: string): boolean {
  return _validPalindrome(s) || _validPalindrome(s.split('').reverse().join(''));
}
function _validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  let dropped = false;
  while (left <= right) {
    if (s[left] === s[right]) {
      left++;
      right--;
      continue;
    } else {
      if (dropped) return false;
      if (s[left + 1] === s[right]) {
        left++;
        dropped = true;
        continue;
      }
      if (s[left] === s[right - 1]) {
        right--;
        dropped = true;
        continue;
      }
      return false;
    }
  }
  return true
};
// @lc code=end
