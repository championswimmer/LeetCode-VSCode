/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (35.11%)
 * Likes:    31298
 * Dislikes: 2917
 * Total Accepted:    3.9M
 * Total Submissions: 11.1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j],
 * nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] +
 * nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not
 * matter.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  function twoSum(numSlice, k) {
    const res = []
    let left = 0
    let right = numSlice.length - 1
    while (left < right) {
      const sum = numSlice[left] + numSlice[right]
      if (sum === k) {
        res.push([numSlice[left], numSlice[right]])
        left++
        right--
        while (left < right && numSlice[left] === numSlice[left - 1]) {
          left++
        }
        while (left < right && numSlice[right] === numSlice[right + 1]) {
          right--
        }
      } else if (sum < k) {
        left++
      } else {
        right--
      }
    }
    return res
  }

  nums = nums.sort((a, b) => a - b)
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    const numSlice = nums.slice(i + 1)
    const res = twoSum(numSlice, -nums[i])
    if (res.length) {
      res.forEach((item) => {
        result.push([nums[i], ...item])
      })
    }
  }
  return result
}
// @lc code=end
