/*
 * @lc app=leetcode id=63 lang=kotlin
 *
 * [63] Unique Paths II
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
        if (m <= 0 && n <= 0) {
            return 0
        }
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

    fun findObstacles(obstacleGrid: Array<IntArray>): List<Pair<Int, Int>> {
        val obstacles = mutableListOf<Pair<Int, Int>>()
        for (i in 0 until obstacleGrid.size) {
            for (j in 0 until obstacleGrid[0].size) {
                if (obstacleGrid[i][j] == 1) {
                    obstacles.add(Pair(i, j))
                }
            }
        }
        return obstacles
    }

    fun uniquePathsWithObstacles(obstacleGrid: Array<IntArray>): Long {
        if (obstacleGrid.last().last() == 1) return 0
        val totalPaths = uniquePaths(obstacleGrid.size, obstacleGrid[0].size)
        val obstacles = findObstacles(obstacleGrid)
        println("obstacles: $obstacles")
        val obstaclePaths = mutableListOf<Long>()

        obstacles.forEach { obstacle ->
            val totalPathsToObstacle = uniquePaths(obstacle.first + 1, obstacle.second + 1)
            val totalPathsFromObstacle = uniquePaths(
                obstacleGrid.size - obstacle.first,
                obstacleGrid[0].size - obstacle.second
            )
            println("totalPathsToObstacle: $totalPathsToObstacle")
            println("totalPathsFromObstacle: $totalPathsFromObstacle")
                obstaclePaths.add(totalPathsToObstacle * totalPathsFromObstacle)
        }

        println("totalPaths: $totalPaths")
        var validPaths = totalPaths - obstaclePaths.sum()
        if (validPaths < 0) validPaths = 0
        return validPaths
    }
}
// @lc code=end

