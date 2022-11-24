/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const l1 = nums1.length;
  const l2 = nums2.length;

  const medianIndex = Math.floor((l1 + l2) / 2);

  let ptr1 = 0;
  let ptr2 = 0;

  while (ptr1 < l1 && ptr2 < l2) {
    if (nums1[ptr1] < nums2[ptr2]) {
      ptr1++;
    } else {
      ptr2++;
    }
    if (ptr1 + ptr2 === medianIndex) {
      return (
        Math.max(nums1[ptr1], nums2[ptr2])
      );
    }
  }

  return 0;
};
// @lc code=end

