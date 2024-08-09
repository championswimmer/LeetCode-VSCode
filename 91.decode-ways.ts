/*
 * @lc app=leetcode id=91 lang=typescript
 *
 * [91] Decode Ways
 */

// @lc code=start
function numDecodings(s: string): number {
  const dp: number[] = [];
  dp[0] = 1;
  dp[1] = 1;
  if (s.length === 0) return 0;
  if (s[0] === '0') return 0;

  for (let i = 2; i <= s.length; i++) {
    dp[i] = 0;
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1];
    }
    if (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] <= '6')) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
};
// @lc code=end

