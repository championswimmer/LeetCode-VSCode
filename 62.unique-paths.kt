/*
 * @lc app=leetcode id=62 lang=kotlin
 *
 * [62] Unique Paths
 */

// @lc code=start
class Solution {
    fun factorial(to: Long, from: Long = 1L): Long {
        var result = from
        for (i in from+1..to) {
            result *= i
        }
        return result
    }

    fun uniquePaths(m: Int, n: Int): Long {
        if (m == 1 || n == 1) {
            return 1
        }
        val downSteps = (m - 1).toLong()
        val rightSteps = (n - 1).toLong()
        val totalSteps = downSteps + rightSteps
        val largerSteps = maxOf(downSteps, rightSteps)
        val smallerSteps = minOf(downSteps, rightSteps)
        return factorial(totalSteps, largerSteps + 1) / factorial(smallerSteps)
    }
}
// @lc code=end

