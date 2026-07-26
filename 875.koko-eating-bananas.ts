/*
 * @lc app=leetcode id=875 lang=typescript
 *
 * [875] Koko Eating Bananas
 *
 * https://leetcode.com/problems/koko-eating-bananas/description/
 *
 * algorithms
 * Medium (48.99%)
 * Likes:    14022
 * Dislikes: 928
 * Total Accepted:    1.7M
 * Total Submissions: 3.4M
 * Testcase Example:  '[3,6,7,11]\n8'
 *
 * Koko loves to eat bananas. There are n piles of bananas, the i^th pile has
 * piles[i] bananas. The guards have gone and will come back in h hours.
 *
 * Koko can decide her bananas-per-hour eating speed of k. Each hour, she
 * chooses some pile of bananas and eats k bananas from that pile. If the pile
 * has less than k bananas, she eats all of them instead and will not eat any
 * more bananas during this hour.
 *
 * Koko likes to eat slowly but still wants to finish eating all the bananas
 * before the guards return.
 *
 * Return the minimum integer k such that she can eat all the bananas within h
 * hours.
 *
 *
 * Example 1:
 *
 *
 * Input: piles = [3,6,7,11], h = 8
 * Output: 4
 *
 *
 * Example 2:
 *
 *
 * Input: piles = [30,11,23,4,20], h = 5
 * Output: 30
 *
 *
 * Example 3:
 *
 *
 * Input: piles = [30,11,23,4,20], h = 6
 * Output: 23
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= piles.length <= 10^4
 * piles.length <= h <= 10^9
 * 1 <= piles[i] <= 10^9
 *
 *
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
  // let bananaSum = 0;
  // for (const pile of piles) {
  //   bananaSum += pile;
  // }
  // const minSpeed = Math.ceil(bananaSum / h);
  // let left = minSpeed;
  let left = 1;
  let right = Math.max(...piles);
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let hoursNeeded = 0;
    for (const pile of piles) {
      hoursNeeded += Math.ceil(pile / mid);
    }
    
    if (hoursNeeded <= h) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  return left;

}
// @lc code=end
