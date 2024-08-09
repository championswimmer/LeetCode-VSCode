/*
 * @lc app=leetcode id=670 lang=typescript
 *
 * [670] Maximum Swap
 */

// @lc code=start
function maximumSwap(num: number): number {
  if (num < 10) return num;
  const numStr = num.toString();
  const numArr = numStr.split('');
  const sortedNumArr = numStr.split('').sort().reverse();
  let i = 0;

  for (i = 0; i <= numArr.length; i++) {
    if (numArr[i] !== sortedNumArr[i]) break;
  }
  if (i === numArr.length) return num;

  const maxNumIndex = numArr.lastIndexOf(sortedNumArr[i]);
  const tmp = numArr[i];
  numArr[i] = numArr[maxNumIndex];
  numArr[maxNumIndex] = tmp;

  return parseInt(numArr.join(''));
  
};
// @lc code=end

