/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 *
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (63.13%)
 * Likes:    17491
 * Dislikes: 672
 * Total Accepted:    2.3M
 * Total Submissions: 3.7M
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * Given an integer array nums and an integer k, return the k most frequent
 * elements. You may return the answer in any order.
 * 
 * 
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * k is in the range [1, the number of unique elements in the array].
 * It is guaranteed that the answer is unique.
 * 
 * 
 * 
 * Follow up: Your algorithm's time complexity must be better than O(n log n),
 * where n is the array's size.
 * 
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    const freqMap = new Map<number, number>();

    nums.forEach(num => {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    });

    const freqArr = Array.from(freqMap.entries());
    freqArr.sort((a, b) => b[1] - a[1]);

    return freqArr.slice(0, k).map(([num]) => num);
};
// @lc code=end

