/*
 * @lc app=leetcode id=314 lang=typescript
 *
 * [314] Binary Tree Vertical Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-vertical-order-traversal/description/
 *
 * algorithms
 * Medium (54.92%)
 * Likes:    3267
 * Dislikes: 336
 * Total Accepted:    438.3K
 * Total Submissions: 796K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given the root of a binary tree, return the vertical order traversal of its
 * nodes' values. (i.e., from top to bottom, column by column).
 * 
 * If two nodes are in the same row and column, the order should be from left
 * to right.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[9],[3,15],[20],[7]]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [3,9,8,4,0,1,7]
 * Output: [[4],[9],[3,0,1],[8],[7]]
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: root = [3,9,8,4,0,1,7,null,null,null,2,5]
 * Output: [[4],[9,5],[3,0,1],[8,2],[7]]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 * 
 * 
 */

// @lc code=start

// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
//   }
// }


function verticalOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) return [];
  const map = new Map<number, number[]>();
  const queue = [{ node: root, col: 0 }];
  let min = 0;
  let max = 0;
  while (queue.length) {
    const { node, col } = queue.shift()!;
    if (!map.has(col)) {
      map.set(col, []);
    }
    map.get(col)!.push(node.val);
    min = Math.min(min, col);
    max = Math.max(max, col);
    if (node.left) {
      queue.push({ node: node.left, col: col - 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, col: col + 1 });
    }
  }
  for (let i = min; i <= max; i++) {
    result.push(map.get(i)!);
  }
  return result;
};
// @lc code=end

