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
  // we will store {sum: coinsNeeded} for each sum we have precomputed
  const preComputed = {}

  var coinChangeHelper = function (coins, amount) {
    // if we have already computed the minimum coins needed for this amount, return it
    if (preComputed[amount] !== undefined) {
      return preComputed[amount]
    }

    // base case: if amount is 0, we need 0 coins
    if (amount === 0) {
      return 0
    }

    // base case: if amount is negative, we cannot make change
    if (amount < 0) {
      return -1
    }

    let minCoins = Infinity

    for (let coin of coins) {
      const res = coinChangeHelper(coins, amount - coin)
      if (res >= 0 && res < minCoins) {
        minCoins = res + 1 // add one coin (current one) to the count
      }
    }

    // store the result in preComputed only if we found a valid solution
    preComputed[amount] = minCoins === Infinity ? -1 : minCoins
    return preComputed[amount]
  }

  return coinChangeHelper(coins, amount)
}
// @lc code=end
