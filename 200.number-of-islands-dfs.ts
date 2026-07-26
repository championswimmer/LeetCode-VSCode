/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 *
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (60.13%)
 * Likes:    22956
 * Dislikes: 525
 * Total Accepted:    2.9M
 * Total Submissions: 4.8M
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and
 * '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges of the grid are
 * all surrounded by water.
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [
 * ⁠ ["1","1","1","1","0"],
 * ⁠ ["1","1","0","1","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","0","0","0"]
 * ]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: grid = [
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","1","0","0"],
 * ⁠ ["0","0","0","1","1"]
 * ]
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 300
 * grid[i][j] is '0' or '1'.
 *
 *
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  let numIslands = 0

  const dfs = (i: number, j: number) => {
    if (
      i < 0 ||              // outside first row
      i >= grid.length ||   // outside last row
      j < 0 ||              // outside first column
      j >= grid[0].length ||// outside last column
      grid[i][j] === '0'    // water or already visited
    ) {
      return
    }

    grid[i][j] = '0' // Mark the cell as visited
    // can mark as '2' if want to preserve original island data for future use

    // Explore all four directions
    dfs(i + 1, j) // Down
    dfs(i - 1, j) // Up
    dfs(i, j + 1) // Right
    dfs(i, j - 1) // Left
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        numIslands++
        dfs(i, j) // Start DFS from the current cell
      }
    }
  }

  return numIslands
}
// @lc code=end
