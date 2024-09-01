/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return
  if (m === 0) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i]
    }
    return
  }
  let p1 = m - 1,
    p2 = n - 1,
    p = m + n - 1
  while (p >= 0) {
    if (p2 < 0) {
      return
    }
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1--]
    } else {
      nums1[p] = nums2[p2--]
    }
    p--
  }
}
// @lc code=end
