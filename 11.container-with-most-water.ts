/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (57.48%)
 * Likes:    34723
 * Dislikes: 2230
 * Total Accepted:    5.7M
 * Total Submissions: 9.4M
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * You are given an integer array height of length n. There are n vertical
 * lines drawn such that the two endpoints of the i^th line are (i, 0) and (i,
 * height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the
 * container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 *
 *
 * Example 1:
 *
 *
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array
 * [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the
 * container can contain is 49.
 *
 *
 * Example 2:
 *
 *
 * Input: height = [1,1]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * n == height.length
 * 2 <= n <= 10^5
 * 0 <= height[i] <= 10^4
 *
 *
 */

// @lc code=start
function maxArea(height: number[]): number {
  let l = 0
  let r = height.length - 1
  let max = 0

  const area = (l: number, r: number) => {
    return Math.min(height[l], height[r]) * (r - l)
  }

  while (l < r) {
    max = Math.max(max, area(l, r))
    if (height[l] < height[r]) {
      l++
    } else {
      r-- 
    }
  }

  return max
}
// @lc code=end
