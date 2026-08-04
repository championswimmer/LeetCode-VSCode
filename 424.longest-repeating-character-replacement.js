/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 *
 * https://leetcode.com/problems/longest-repeating-character-replacement/description/
 *
 * algorithms
 * Medium (56.78%)
 * Likes:    13375
 * Dislikes: 788
 * Total Accepted:    1.7M
 * Total Submissions: 2.8M
 * Testcase Example:  '"ABAB"\n2'
 *
 * You are given a string s and an integer k. You can choose any character of
 * the string and change it to any other uppercase English character. You can
 * perform this operation at most k times.
 *
 * Return the length of the longest substring containing the same letter you
 * can get after performing the above operations.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "ABAB", k = 2
 * Output: 4
 * Explanation: Replace the two 'A's with two 'B's or vice versa.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "AABABBA", k = 1
 * Output: 4
 * Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
 * The substring "BBBB" has the longest repeating letters, which is 4.
 * There may exists other ways to achieve this answer too.
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s consists of only uppercase English letters.
 * 0 <= k <= s.length
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0
  let right = 0

  // frequency map 
  const charCount = new Array(26).fill(0)
  let maxCount = 0
  let maxLength = 0

  while (right < s.length) {
    const rightCharIndex = s.charCodeAt(right) - 65
    charCount[rightCharIndex]++

    // only the newly added char can be greater than max, so check that only
    maxCount = Math.max(maxCount, charCount[rightCharIndex])

    // if we are using more than k replacements, shrink the window from the left
    while ((right - left + 1) - maxCount > k) {
      const leftCharIndex = s.charCodeAt(left) - 65
      charCount[leftCharIndex]--
      left++

      // recalculate maxCount after shrinking the window
      maxCount = Math.max(...charCount)
    }

    maxLength = Math.max(maxLength, right - left + 1)
    right++
  }

  return maxLength
}
// @lc code=end
