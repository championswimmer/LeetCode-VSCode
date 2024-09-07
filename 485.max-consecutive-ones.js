/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 *
 * https://leetcode.com/problems/max-consecutive-ones/description/
 *
 * algorithms
 * Easy (60.11%)
 * Likes:    5823
 * Dislikes: 457
 * Total Accepted:    1.3M
 * Total Submissions: 2.2M
 * Testcase Example:  '[1,1,0,1,1,1]'
 *
 * Given a binary array nums, return the maximum number of consecutive 1's in
 * the array.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive
 * 1s. The maximum number of consecutive 1s is 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [1,0,1,1,0,1]
 * Output: 2
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
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    l = 0
    r = 0
    max = 0
    while (r < nums.length) {
        if (nums[r] === 1) {
            r++
        } else {
            max = Math.max(max, r - l)
            r++
            l = r
        }
    }
    return Math.max(max, r - l)
};
// @lc code=end

