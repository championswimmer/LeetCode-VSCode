/*
 * @lc app=leetcode id=1650 lang=javascript
 *
 * [1650] Lowest Common Ancestor of a Binary Tree III
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function (p, q) {
  const pathToP = []
  const pathToQ = []
  let node = p
  while (node) {
    pathToP.push(node)
    node = node.parent
  }
  node = q
  while (node) {
    pathToQ.push(node)
    node = node.parent
  }
  let lca = null
  while (pathToQ.length) {
    const nodeP = pathToP.pop()
    const nodeQ = pathToQ.pop()
    if (nodeP === nodeQ) {
      lca = nodeP
    } else {
      break
    }
  }
  return lca
}
// @lc code=end
