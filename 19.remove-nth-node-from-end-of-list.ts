/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
 */

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

// @lc code=start

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let orig = head;
  let top = head;
  if (head === null) {
    return null;
  }

  for (let i = 0; i < n; i++) {
    if (head.next === null) {
      return top.next;
    }
    head = head.next;
  }

  while (head.next !== null) {
    head = head.next;
    orig = orig!.next;
  }

  orig!.next = orig!.next!.next;

  return top;

}
// @lc code=end
