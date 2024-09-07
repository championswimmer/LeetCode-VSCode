/*
 * @lc app=leetcode id=487 lang=javascript
 *
 * [487] Max Consecutive Ones II
 *
 * https://leetcode.com/problems/max-consecutive-ones-ii/description/
 *
 * algorithms
 * Medium (50.48%)
 * Likes:    1546
 * Dislikes: 27
 * Total Accepted:    151.1K
 * Total Submissions: 299K
 * Testcase Example:  '[1,0,1,1,0]'
 *
 * Given a binary array nums, return the maximum number of consecutive 1's in
 * the array if you can flip at most one 0.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,0,1,1,0]
 * Output: 4
 * Explanation:
 * - If we flip the first zero, nums becomes [1,1,1,1,0] and we have 4
 * consecutive ones.
 * - If we flip the second zero, nums becomes [1,0,1,1,1] and we have 3
 * consecutive ones.
 * The max number of consecutive ones is 4.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,0,1,1,0,1]
 * Output: 4
 * Explanation:
 * - If we flip the first zero, nums becomes [1,1,1,1,0,1] and we have 4
 * consecutive ones.
 * - If we flip the second zero, nums becomes [1,0,1,1,1,1] and we have 4
 * consecutive ones.
 * The max number of consecutive ones is 4.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * nums[i] is either 0 or 1.
 *
 *
 *
 * Follow up: What if the input numbers come in one by one as an infinite
 * stream? In other words, you can't store all numbers coming from the stream
 * as it's too large to hold in memory. Could you solve it efficiently?
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  l = 0
  r = 0
  flip = 0
  max = 0
  while (r < nums.length) {
    if (nums[r] === 1) {
      r++
    } else if (flip === 0) {
      flip++
      r++
    } else {
      max = Math.max(max, r - l)
      while (nums[l] === 1) {
        l++
      }
      l++
      flip--
    }
  }
  return Math.max(max, r - l)
}
// @lc code=end
