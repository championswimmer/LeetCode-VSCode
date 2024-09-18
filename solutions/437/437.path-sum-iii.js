/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
 *
 * https://leetcode.com/problems/path-sum-iii/description/
 *
 * algorithms
 * Medium (46.13%)
 * Likes:    11041
 * Dislikes: 526
 * Total Accepted:    603.6K
 * Total Submissions: 1.3M
 * Testcase Example:  '[10,5,-3,3,2,null,11,3,-2,null,1]\n8'
 *
 * Given the root of a binary tree and an integer targetSum, return the number
 * of paths where the sum of the values along the path equals targetSum.
 * 
 * The path does not need to start or end at the root or a leaf, but it must go
 * downwards (i.e., traveling only from parent nodes to child nodes).
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
 * Output: 3
 * Explanation: The paths that sum to 8 are shown.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * Output: 3
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [0, 1000].
 * -10^9 <= Node.val <= 10^9
 * -1000 <= targetSum <= 1000
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum, path = [], res = [0]) {
  const countSum = (path, targetSum) => {
      let i = path.length - 1, sum = 0, count = 0;
      while(i >= 0) {
          sum += path[i]
          if(sum == targetSum) {
              count++;
          }

          i--;
      }
      return count;
  }
  const traverse = (root, targetSum, path = [], res = [0]) => {
      if(root != null) {
          path.push(root.val);
          res[0] += countSum(path, targetSum)
          traverse(root.left, targetSum, path, res);
          traverse(root.right, targetSum, path, res);
          path.pop();
      }

      return res;
  }
  return traverse(root, targetSum)[0]
};
// @lc code=end

