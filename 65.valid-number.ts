/*
 * @lc app=leetcode id=65 lang=typescript
 *
 * [65] Valid Number
 */

// @lc code=start
function isNumber(s: string): boolean {
  let number = s.trim().toLocaleLowerCase();
  if (number.length === 0) return false;
  if (number.indexOf('inf') !== -1) return false;

  if (number.indexOf("e") !== -1) {
    const split = number.split("e");
    if (split.length > 2) return false;
    let [left, right] = split;
    if (right[0] === "+" || right[0] === "-") right = right.slice(1);
    if (left.length === 0) return false;
    if (right.length === 0) return false;
    if (right.indexOf(".") !== -1) return false;
    if (right.indexOf("-") !== -1) return false;
    if (right.indexOf("+") !== -1) return false;
    if (isNaN(Number(right))) return false;
    number = left;
  }

  if (number[0] === "+" || number[0] === "-") number = number.slice(1);
  if (number.length === 0) return false;

  if (number.indexOf(".") !== -1) {
    const split = number.split(".");
    if (split.length > 2) return false;
    const [left, right] = split;
    if (left.length === 0 && right.length === 0) return false;
    if (right.length === 0 && isNaN(Number(left))) return false;
    if (left.length === 0 && isNaN(Number(right))) return false;
  }

  if (isNaN(Number(number))) return false;

  return true;
}
// @lc code=end
