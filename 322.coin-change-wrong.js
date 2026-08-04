/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 *
 * https://leetcode.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (46.13%)
 * Likes:    21187
 * Dislikes: 549
 * Total Accepted:    3M
 * Total Submissions: 6.1M
 * Testcase Example:  '[1,2,5]\n11'
 *
 * You are given an integer array coins representing coins of different
 * denominations and an integer amount representing a total amount of money.
 *
 * Return the fewest number of coins that you need to make up that amount. If
 * that amount of money cannot be made up by any combination of the coins,
 * return -1.
 *
 * You may assume that you have an infinite number of each kind of coin.
 *
 *
 * Example 1:
 *
 *
 * Input: coins = [1,2,5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 *
 *
 * Example 2:
 *
 *
 * Input: coins = [2], amount = 3
 * Output: -1
 *
 *
 * Example 3:
 *
 *
 * Input: coins = [1], amount = 0
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= coins.length <= 12
 * 1 <= coins[i] <= 2^31 - 1
 * 0 <= amount <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const coinBag = [];
  const sortedCoins = coins.sort((a, b) => b - a);
  // quotients and remainders of the amount when divided by each coin
  const leftMap = new Array(sortedCoins.length).fill([0, 0]);
  let sum = 0;
  // go over the array from big to small
  while (sum < amount) {
    // populate leftMap with the quotients and remainders of the amount when divided by each coin
    for (let i = 0; i < sortedCoins.length; i++) {
      const coin = sortedCoins[i];
      const quotient = Math.floor((amount - sum) / coin);
      const remainder = (amount - sum) % coin;
      leftMap[i] = [quotient, remainder];
      if (remainder === 0) {
        return coinBag.length + quotient;
      }
    }
    console.log('leftMap', leftMap);
    // increment sum by the largest coin that can be used to make up the amount
    for (let i = 0; i < leftMap.length; i++) {
      const [quotient, remainder] = leftMap[i];
      if (quotient > 0) {
        sum += sortedCoins[i];
        coinBag.push(sortedCoins[i]);
        break;
      }
    }
  }

  return -1;

}
// @lc code=end
