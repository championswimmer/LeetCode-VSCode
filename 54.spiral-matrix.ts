/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 *
 * https://leetcode.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (53.43%)
 * Likes:    17706
 * Dislikes: 1592
 * Total Accepted:    2.5M
 * Total Submissions: 4.4M
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 *
 * Example 1:
 *
 *
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 *
 * Example 2:
 *
 *
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 *
 * Constraints:
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 *
 *
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length
  const n = matrix[0].length
  const curr = [0, 0]
  let dir = 'r' // r, d, l, u
  const result = []
  for (let i = 0; i < m * n; i++) {
    result.push(matrix[curr[0]][curr[1]])
    matrix[curr[0]][curr[1]] = -999
    if (dir === 'r') {
      if (curr[1] + 1 < n && matrix[curr[0]][curr[1] + 1] !== -999) {
        curr[1]++
      } else {
        dir = 'd'
        curr[0]++
      }
    } else if (dir === 'd') {
      if (curr[0] + 1 < m && matrix[curr[0] + 1][curr[1]] !== -999) {
        curr[0]++
      } else {
        dir = 'l'
        curr[1]--
      }
    } else if (dir === 'l') {
      if (curr[1] - 1 >= 0 && matrix[curr[0]][curr[1] - 1] !== -999) {
        curr[1]--
      } else {
        dir = 'u'
        curr[0]--
      }
    } else if (dir === 'u') {
      if (curr[0] - 1 >= 0 && matrix[curr[0] - 1][curr[1]] !== -999) {
        curr[0]--
      } else {
        dir = 'r'
        curr[1]++
      }
    }
  }
  return result
}
// @lc code=end
