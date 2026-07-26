/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const totalLen = nums1.length + nums2.length;
  const isEven = totalLen % 2 === 0;
  const medianPos = Math.floor(totalLen / 2);
  
  let prev = 0; // element before median position
  let curr = 0; // element at median position
  let i = 0, j = 0;

  // Merge arrays and track the two middle elements
  for (let count = 0; count <= medianPos; count++) {
    prev = curr;

    // Pick the smaller element from whichever array has one available
    if (i < nums1.length && (j >= nums2.length || nums1[i] <= nums2[j])) {
      curr = nums1[i++];
    } else {
      curr = nums2[j++];
    }
  }

  // For even length, return average of two middle elements
  if (isEven) {
    return (prev + curr) / 2;
  }

  // For odd length, return the middle element
  return curr;
};
// @lc code=end

