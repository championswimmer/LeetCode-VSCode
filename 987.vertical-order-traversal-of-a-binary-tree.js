/*
 * @lc app=leetcode id=987 lang=javascript
 *
 * [987] Vertical Order Traversal of a Binary Tree
 *
 * https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/description/
 *
 * algorithms
 * Hard (48.50%)
 * Likes:    7697
 * Dislikes: 4337
 * Total Accepted:    471.6K
 * Total Submissions: 967.1K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given the root of a binary tree, calculate the vertical order traversal of
 * the binary tree.
 *
 * For each node at position (row, col), its left and right children will be at
 * positions (row + 1, col - 1) and (row + 1, col + 1) respectively. The root
 * of the tree is at (0, 0).
 *
 * The vertical order traversal of a binary tree is a list of top-to-bottom
 * orderings for each column index starting from the leftmost column and ending
 * on the rightmost column. There may be multiple nodes in the same row and
 * same column. In such a case, sort these nodes by their values.
 *
 * Return the vertical order traversal of the binary tree.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[9],[3,15],[20],[7]]
 * Explanation:
 * Column -1: Only node 9 is in this column.
 * Column 0: Nodes 3 and 15 are in this column in that order from top to
 * bottom.
 * Column 1: Only node 20 is in this column.
 * Column 2: Only node 7 is in this column.
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,3,4,5,6,7]
 * Output: [[4],[2],[1,5,6],[3],[7]]
 * Explanation:
 * Column -2: Only node 4 is in this column.
 * Column -1: Only node 2 is in this column.
 * Column 0: Nodes 1, 5, and 6 are in this column.
 * ⁠         1 is at the top, so it comes first.
 * ⁠         5 and 6 are at the same position (2, 0), so we order them by their
 * value, 5 before 6.
 * Column 1: Only node 3 is in this column.
 * Column 2: Only node 7 is in this column.
 *
 *
 * Example 3:
 *
 *
 * Input: root = [1,2,3,4,6,5,7]
 * Output: [[4],[2],[1,5,6],[3],[7]]
 * Explanation:
 * This case is the exact same as example 2, but with nodes 5 and 6 swapped.
 * Note that the solution remains the same since 5 and 6 are in the same
 * location and should be ordered by their values.
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * 0 <= Node.val <= 1000
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  datamap = {} // { col : {row: [vals] }}
  bfsQueue = []
  bfsQueue.push({ node: root, col: 0, row: 0 })

  while (bfsQueue.length) {
    let { node, col, row } = bfsQueue.shift()
    if (!datamap[col]) datamap[col] = {}
    if (!datamap[col][row]) datamap[col][row] = []
    datamap[col][row].push(node.val)
    datamap[col][row].sort((a, b) => a - b)
    if (node.left)
      bfsQueue.push({ node: node.left, col: col - 1, row: row + 1 })
    if (node.right)
      bfsQueue.push({ node: node.right, col: col + 1, row: row + 1 })
  }
  result = []
  for (let col of Object.keys(datamap).sort((a, b) => a - b)) {
    let colData = []
    for (let row of Object.keys(datamap[col]).sort((a, b) => a - b)) {
      colData = colData.concat(datamap[col][row])
    }
    result.push(colData)
  }
  return result
}
// @lc code=end
