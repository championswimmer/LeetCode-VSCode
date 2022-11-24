/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start

// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  let result = new ListNode(0, null);
  const head = result;

  while (list1 != null || list2!! != null) {
    if (list1 == null) {
      result.next = list2;
      break;
    } else if (list2 == null) {
      result.next = list1;
      break;
    }

    if (list1!!.val < list2!!.val) {
      result.next = new ListNode(list1!!.val, null);
      list1 = list1!!.next;
    } else {
      result.next = new ListNode(list2!!.val, null);
      list2 = list2!!.next;
    }
    result = result!!.next;
  }
  return head.next;
};
// @lc code=end

