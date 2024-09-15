/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 *
 * https://leetcode.com/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (45.21%)
 * Likes:    17448
 * Dislikes: 297
 * Total Accepted:    987.9K
 * Total Submissions: 2.2M
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * Given an array of integers heights representing the histogram's bar height
 * where the width of each bar is 1, return the area of the largest rectangle
 * in the histogram.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: heights = [2,1,5,6,2,3]
 * Output: 10
 * Explanation: The above is a histogram where width of each bar is 1.
 * The largest rectangle is shown in the red area, which has an area = 10
 * units.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: heights = [2,4]
 * Output: 4
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= heights.length <= 10^5
 * 0 <= heights[i] <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    function calculateArea(heights, start, end) {
        if (start > end) return 0;
        let minIndex = start;
        for (let i = start; i <= end; i++) {
            if (heights[minIndex] > heights[i]) {
                minIndex = i;
            }
        }

        return Math.max(
          // 1. widest rectangle below this height
          heights[minIndex] * (end - start + 1),
          // 2. widest rectangle in left part
          calculateArea(heights, start, minIndex - 1), 
          // 3. widest rectangle in right part
          calculateArea(heights, minIndex + 1, end)
        );
    }
    return calculateArea(heights, 0, heights.length - 1);
};
// @lc code=end

