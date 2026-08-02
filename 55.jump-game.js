/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 *
 * https://leetcode.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (39.26%)
 * Likes:    21987
 * Dislikes: 1499
 * Total Accepted:    3.4M
 * Total Submissions: 8.1M
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * You are given an integer array nums. You are initially positioned at the
 * array's first index, and each element in the array represents your maximum
 * jump length at that position.
 *
 * Return true if you can reach the last index, or false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last
 * index.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its maximum
 * jump length is 0, which makes it impossible to reach the last index.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * 0 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const positions = [nums.length - 1]
  // const reached = new Set()

  while (positions.length) {
    const position = positions.pop()
    if (position === 0) {
      return true
    }
    let maxLeftReach = position
    for (let i = position - 1; i >= 0; i--) {
      if (nums[i] >= position - i) {
        // if (!reached.has(i)) {
        //   reached.add(i)
        //   maxReach = i
        // }
        if (i < maxLeftReach) {
          maxLeftReach = i
        }
      }
    }
    if (maxLeftReach < position) {
      positions.push(maxLeftReach)
    }
  }

  return false
}
// @lc code=end
