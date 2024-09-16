/*
 * @lc app=leetcode id=437 lang=typescript
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

// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }


function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0;
  let count = 0;
  let k = 0;
  let map = new Map<number, number>();

  function preorder(node: TreeNode | null, sum: number) {
    if (!node) return;
    sum += node.val;
    if (sum === targetSum) count++;
    count += map.get(sum - targetSum) || 0;
    map.set(sum, (map.get(sum) || 0) + 1);
    preorder(node.left, sum);
    preorder(node.right, sum);
    map.set(sum, (map.get(sum) || 0) - 1);
  }

  preorder(root, k);
  return count;
};
// @lc code=end

