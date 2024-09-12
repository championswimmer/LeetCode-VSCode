/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 *
 * https://leetcode.com/problems/diameter-of-binary-tree/description/
 *
 * algorithms
 * Easy (61.19%)
 * Likes:    14007
 * Dislikes: 1052
 * Total Accepted:    1.7M
 * Total Submissions: 2.7M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given the root of a binary tree, return the length of the diameter of the
 * tree.
 * 
 * The diameter of a binary tree is the length of the longest path between any
 * two nodes in a tree. This path may or may not pass through the root.
 * 
 * The length of a path between two nodes is represented by the number of edges
 * between them.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [1,2,3,4,5]
 * Output: 3
 * Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [1,2]
 * Output: 1
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [1, 10^4].
 * -100 <= Node.val <= 100
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let dia = 0;  // Variable to store the maximum diameter

  function dfs(node) {
      if (!node) return 0;  // Base case: if node is null, return 0

      let left = dfs(node.left);   // Recursively process left subtree
      let right = dfs(node.right); // Recursively process right subtree

      // Update the diameter if the path through the current node is longer
      dia = Math.max(dia, left + right);

      // Return the longer path between left and right, plus 1 for the current node
      return Math.max(left, right) + 1;
  }

  dfs(root);  // Start the DFS from the root
  return dia; // Return the maximum diameter found
}
// @lc code=end

