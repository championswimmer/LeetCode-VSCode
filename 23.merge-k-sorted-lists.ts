/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const numLists = lists.length;
    lists = lists.filter(node => node != null);
    if (numLists === 0) return null;
    if (numLists === 1 && lists[0] == null) return null;
    if (numLists === 1) return lists[0];
    const top = new ListNode(0, null);
    let current = top;
    while(lists.length > 0) {
        const smallest = smallestNode(lists);
        current.next = smallest;
        current = current.next;
        lists.splice(lists.indexOf(smallest), 1);
        if (smallest != null && smallest.next) {
            lists.push(smallest.next);
        }
    }
    return top.next;
};

function smallestNode(nodes: Array<ListNode>): ListNode {
  const arr = nodes.map(node => node.val);
  const min = Math.min(...arr);
  const index = arr.indexOf(min);
  return nodes[index];
}
// @lc code=end