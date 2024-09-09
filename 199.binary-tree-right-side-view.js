/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
 *
 * https://leetcode.com/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (63.64%)
 * Likes:    12124
 * Dislikes: 986
 * Total Accepted:    1.5M
 * Total Submissions: 2.3M
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * Given the root of a binary tree, imagine yourself standing on the right side
 * of it, return the values of the nodes you can see ordered from top to
 * bottom.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [1,2,3,null,5,null,4]
 * Output: [1,3,4]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [1,null,3]
 * Output: [1,3]
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: root = []
 * Output: []
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    // const rowMap = new Map();
    const result = [];
    const queue = [];
    if (root) {
        queue.push([root, 0]);
    }
    while (queue.length) {
        const [node, row] = queue.shift();
        if (node) {
            // data = rowMap.get(row);
            // if (data === undefined) {
            //     rowMap.set(row, [node.val]);
            // } else {
            //     data.push(node.val);
            // }
            // rowMap.set(row, node.val)
            result[row] = node.val;
            queue.push([node.left, row + 1]);
            queue.push([node.right, row + 1]);
        }
    }
    // for (let [key, value] of rowMap) {
    //     // result.push(value[value.length - 1]);
    //     result.push(value);
    // }
    return result;
};
// @lc code=end

