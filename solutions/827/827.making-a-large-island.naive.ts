/*
 * @lc app=leetcode id=827 lang=typescript
 *
 * [827] Making A Large Island
 *
 * https://leetcode.com/problems/making-a-large-island/description/
 *
 * algorithms
 * Hard (48.18%)
 * Likes:    3977
 * Dislikes: 78
 * Total Accepted:    198.8K
 * Total Submissions: 409.2K
 * Testcase Example:  '[[1,0],[0,1]]'
 *
 * You are given an n x n binary matrix grid. You are allowed to change at most
 * one 0 to be 1.
 * 
 * Return the size of the largest island in grid after applying this
 * operation.
 * 
 * An island is a 4-directionally connected group of 1s.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: grid = [[1,0],[0,1]]
 * Output: 3
 * Explanation: Change one 0 to 1 and connect two 1s, then we get an island
 * with area = 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: grid = [[1,1],[1,0]]
 * Output: 4
 * Explanation: Change the 0 to 1 and make the island bigger, only one island
 * with area = 4.
 * 
 * Example 3:
 * 
 * 
 * Input: grid = [[1,1],[1,1]]
 * Output: 4
 * Explanation: Can't change any 0 to 1, only one island with area = 4.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * n == grid.length
 * n == grid[i].length
 * 1 <= n <= 500
 * grid[i][j] is either 0 or 1.
 * 
 * 
 */

// @lc code=start
function largestIsland(grid: number[][]): number {
  let max = 0;
  let seen = new Set();

  function dfs(i, j): number {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0 || seen.has(i + ',' + j)) {
      return 0;
    }

    seen.add(i + ',' + j);
    return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
  }

  // find all 0s and dfs from there 
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        grid[i][j] = 1;
        seen = new Set();
        max = Math.max(max, dfs(i, j));
        grid[i][j] = 0;
      }
    }
  }

  return max === 0 ? grid.length * grid[0].length : max;

};
// @lc code=end

