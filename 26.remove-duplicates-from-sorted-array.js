/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let p1 = 0
  let p2 = 0

  while (p2 < nums.length) {
    if (nums[p2] !== nums[p1]) {
      nums[++p1] = nums[p2]
    }
    p2++
  }
  return ++p1
}
// @lc code=end
