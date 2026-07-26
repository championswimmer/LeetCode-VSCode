/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (64.68%)
 * Likes:    36793
 * Dislikes: 711
 * Total Accepted:    3.7M
 * Total Submissions: 5.5M
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it can trap after raining.
 *
 *
 * Example 1:
 *
 *
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by array
 * [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue
 * section) are being trapped.
 *
 *
 * Example 2:
 *
 *
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 *
 *
 *
 * Constraints:
 *
 *
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 *
 *
 */

// @lc code=start
function trap(height: number[]): number {
  // two pointers; start and end
  let l = 0;
  let r = height.length - 1;
  // leftMax and rightMax to keep track of the maximum height from the left and right
  let leftMax = 0;
  let rightMax = 0;
  let ans = 0;
  
  while (l < r) {
    if (height[l] < height[r]) {
      // when the left height is less than the right height,
      // we can safely say that the water trapped at the left 
      // index is determined by the leftMax
      if (height[l] >= leftMax) {
        // update leftMax if the current height is greater than or equal to leftMax
        leftMax = height[l];
      } else {
        // if the current height is less than leftMax, we can trap water
        ans += leftMax - height[l];
      }
      l++;
    } else {
      // when the right height is less than or equal to the left height,
      // we can safely say that the water trapped at the right 
      // index is determined by the rightMax
      if (height[r] >= rightMax) {
        // update rightMax if the current height is greater than or equal to rightMax
        rightMax = height[r];
      } else {
        // if the current height is less than rightMax, we can trap water
        ans += rightMax - height[r];
      }
      r--;
    }
  }
  return ans;
};
// @lc code=end
