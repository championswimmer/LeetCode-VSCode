/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return s
  if (s.length === 2) {
    if (s[0] === s[1]) return s
    else return s[0]
  }
  let longest = ''
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      // expand even
      let l = i, r = i + 1
      while (l >= 0 && r < s.length) {
        if (s[l] === s[r]) {
          l--
          r++
        } else break
      }
      if (longest.length < r - l - 1) longest = s.substring(l + 1, r)
    }
    if (s[i] === s[i + 2]) {
      // expand odd
      let l = i, r = i + 2
      while (l >= 0 && r < s.length) {
        if (s[l] === s[r]) {
          l--
          r++
        } else break
      }
      if (longest.length < r - l - 1) longest = s.substring(l + 1, r)
    }
  }
  if (longest.length > 0) return longest 
  else return s[0]
}
// @lc code=end
