/*
 * @lc app=leetcode id=410 lang=typescript
 *
 * [410] Split Array Largest Sum
 *
 * https://leetcode.com/problems/split-array-largest-sum/description/
 *
 * algorithms
 * Hard (57.67%)
 * Likes:    11557
 * Dislikes: 273
 * Total Accepted:    687.4K
 * Total Submissions: 1.1M
 * Testcase Example:  '[7,2,5,10,8]\n2'
 *
 * Given an integer array nums and an integer k, split nums into k non-empty
 * subarrays such that the largest sum of any subarray is minimized.
 *
 * Return the minimized largest sum of the split.
 *
 * A subarray is a contiguous part of the array.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [7,2,5,10,8], k = 2
 * Output: 18
 * Explanation: There are four ways to split nums into two subarrays.
 * The best way is to split it into [7,2,5] and [10,8], where the largest sum
 * among the two subarrays is only 18.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,4,5], k = 2
 * Output: 9
 * Explanation: There are four ways to split nums into two subarrays.
 * The best way is to split it into [1,2,3] and [4,5], where the largest sum
 * among the two subarrays is only 9.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 1000
 * 0 <= nums[i] <= 10^6
 * 1 <= k <= min(50, nums.length)
 *
 *
 */

// @lc code=start
function splitArray(nums: number[], k: number): number {
  let min = Math.max(...nums)
  let max = nums.reduce((a, b) => a + b, 0)

  // check if we can split array into k subarrays, all of which have sum <= maxSum
  const canSplit = (maxSum: number): boolean => {
    let count = 1
    let currentSum = 0
    
    for (const num of nums) {

      if (currentSum + num > maxSum) {
        count++
        currentSum = num
        if (count > k) return false
      } else {
        currentSum += num
      }
    }
    return true
  }

  while (min < max) {
    const mid = Math.floor((min + max) / 2)
    if (canSplit(mid)) {
      max = mid
    } else {
      min = mid + 1
    }
  }


  return min
}
// @lc code=end
