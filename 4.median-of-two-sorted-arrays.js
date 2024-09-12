/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (41.06%)
 * Likes:    28663
 * Dislikes: 3217
 * Total Accepted:    2.8M
 * Total Submissions: 6.9M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return
 * the median of the two sorted arrays.
 * 
 * The overall run time complexity should be O(log (m+n)).
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    merged = []
    let p1 = 0, p2 = 0
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] < nums2[p2]) {
            merged.push(nums1[p1])
            p1++
        } else {
            merged.push(nums2[p2])
            p2++
        }
    }
    while (p1 < nums1.length) {
        merged.push(nums1[p1])
        p1++
    }
    while (p2 < nums2.length) {
        merged.push(nums2[p2])
        p2++
    }
    let len = merged.length
    if (len % 2 === 0) {
        return (merged[len / 2 - 1] + merged[len / 2]) / 2
    } else {
        return merged[Math.floor(len / 2)]
    }
};
// @lc code=end

