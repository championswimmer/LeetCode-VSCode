/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {

  const romanMap = new Map<string, number>();
  romanMap.set('I', 1);
  romanMap.set('V', 5);
  romanMap.set('X', 10);
  romanMap.set('L', 50);
  romanMap.set('C', 100);
  romanMap.set('D', 500);
  romanMap.set('M', 1000);


  // convert string 's' to a roman number
  let n = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanMap.get(s[i])!;
    const next = romanMap.get(s[i + 1])!;

    if (current < next) {
      n -= current;
    } else {
      n += current;
    }
  }

  return n;


};
// @lc code=end

