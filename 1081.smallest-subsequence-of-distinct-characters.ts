/*
 * @lc app=leetcode id=1081 lang=typescript
 *
 * [1081] Smallest Subsequence of Distinct Characters
 *
 * https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/description/
 *
 * algorithms
 * Medium (61.75%)
 * Likes:    3123
 * Dislikes: 210
 * Total Accepted:    191.5K
 * Total Submissions: 271.5K
 * Testcase Example:  '"bcabc"'
 *
 * Given a string s, return the lexicographically smallest subsequence of s
 * that contains all the distinct characters of s exactly once.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "bcabc"
 * Output: "abc"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cbacdcbc"
 * Output: "acdb"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consists of lowercase English letters.
 *
 *
 *
 * Note: This question is the same as 316:
 * https://leetcode.com/problems/remove-duplicate-letters/
 */

// @lc code=start
function smallestSubsequence(s: string): string {
  const letterCounts: Record<string, number> = {}
  for (const char of s) {
    letterCounts[char] = (letterCounts[char] || 0) + 1
  }

  const stack: string[] = []
  const seen: Set<string> = new Set()

  for (const char of s) {
    letterCounts[char]--

    if (seen.has(char)) {
      continue
    }

    while (
      stack.length > 0 &&
      stack[stack.length - 1] > char &&
      letterCounts[stack[stack.length - 1]] > 0
    ) {
      seen.delete(stack.pop()!)
    }
    stack.push(char)
    seen.add(char)

  }

  return stack.join('')


}
// @lc code=end
