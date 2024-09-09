/*
 * @lc app=leetcode id=1091 lang=javascript
 *
 * [1091] Shortest Path in Binary Matrix
 *
 * https://leetcode.com/problems/shortest-path-in-binary-matrix/description/
 *
 * algorithms
 * Medium (47.92%)
 * Likes:    6589
 * Dislikes: 243
 * Total Accepted:    519K
 * Total Submissions: 1.1M
 * Testcase Example:  '[[0,1],[1,0]]'
 *
 * Given an n x n binary matrix grid, return the length of the shortest clear
 * path in the matrix. If there is no clear path, return -1.
 * 
 * A clear path in a binary matrix is a path from the top-left cell (i.e., (0,
 * 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
 * 
 * 
 * All the visited cells of the path are 0.
 * All the adjacent cells of the path are 8-directionally connected (i.e., they
 * are different and they share an edge or a corner).
 * 
 * 
 * The length of a clear path is the number of visited cells of this path.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: grid = [[0,1],[1,0]]
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
 * Output: 4
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
 * Output: -1
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * n == grid.length
 * n == grid[i].length
 * 1 <= n <= 100
 * grid[i][j] is 0 or 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if (grid[0][0] === 1) return -1;
    if (grid.length === 1) return 1;

    const n = grid.length;
    const queue = [[[0,0]]]; // queue of paths
    const visited = new Set();
    visited.add([0,0].toString());
    while (queue.length) {
      const pathSoFar = queue.shift();
      const [i, j] = pathSoFar[pathSoFar.length - 1];
      if (i === n - 1 && j === n - 1) {
        return pathSoFar.length;
      }
      for (let [x, y] of [[i-1, j-1], [i-1, j], [i-1, j+1], [i, j-1], [i, j+1], [i+1, j-1], [i+1, j], [i+1, j+1]]) {
        if (x >= 0 && x < n && y >= 0 && y < n && grid[x][y] === 0 && !visited.has([x, y].toString())) {
          visited.add([x, y].toString());
          queue.push([...pathSoFar, [x, y]]);
        }
      }
    }
    return -1;
};
// @lc code=end

