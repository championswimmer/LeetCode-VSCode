/*
 * @lc app=leetcode id=16 lang=typescript
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (46.75%)
 * Likes:    11793
 * Dislikes: 627
 * Total Accepted:    2M
 * Total Submissions: 4M
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an integer array nums of length n and an integer target, find three
 * integers at distinct indices in nums such that the sum is closest to
 * target.
 *
 * Return the sum of the three integers.
 *
 * You may assume that each input would have exactly one solution.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-1,2,1,-4], target = 1
 * Output: 2
 * Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,0,0], target = 1
 * Output: 0
 * Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 =
 * 0).
 *
 *
 *
 * Constraints:
 *
 *
 * 3 <= nums.length <= 500
 * -1000 <= nums[i] <= 1000
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  let closestSum = Infinity; // Initialize closest sum to a large number

  const sortedNums = nums.sort((a, b) => a - b);
  // go from beginning to end (leaving last 2)
  for (let i = 0; i < sortedNums.length - 2; i++) {
    const a = sortedNums[i]; // pegging this
    const newTarget = target - a; // new target for the other 2 numbers
    let left = i + 1; // left pointer
    let right = sortedNums.length - 1; // right pointer

    while (left < right) {
      const b = sortedNums[left];
      const c = sortedNums[right];
      const currentSum = a + b + c;

      // Update closest sum if the current sum is closer to the target
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
        if (closestSum === target) {
          return closestSum; // Early exit if we find the exact target
        }
      }

      // Move pointers based on comparison with newTarget
      if (b + c < newTarget) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closestSum;
}
// @lc code=end
