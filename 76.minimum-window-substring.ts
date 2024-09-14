/*
 * @lc app=leetcode id=76 lang=typescript
 *
 * [76] Minimum Window Substring
 *
 * https://leetcode.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (43.50%)
 * Likes:    18055
 * Dislikes: 748
 * Total Accepted:    1.5M
 * Total Submissions: 3.4M
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * Given two strings s and t of lengths m and n respectively, return the
 * minimum window substring of s such that every character in t (including
 * duplicates) is included in the window. If there is no such substring, return
 * the empty string "".
 * 
 * The testcases will be generated such that the answer is unique.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C'
 * from string t.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "a", t = "a"
 * Output: "a"
 * Explanation: The entire string s is the minimum window.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "a", t = "aa"
 * Output: ""
 * Explanation: Both 'a's from t must be included in the window.
 * Since the largest window of s only has one 'a', return empty string.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * m == s.length
 * n == t.length
 * 1 <= m, n <= 10^5
 * s and t consist of uppercase and lowercase English letters.
 * 
 * 
 * 
 * Follow up: Could you find an algorithm that runs in O(m + n) time?
 * 
 */

// @lc code=start
function minWindow(s: string, t: string): string {
    const tMap = new Map<string, number>();
    for (let i = 0; i < t.length; i++) {
        tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
    }
    const sMap = new Map<string, number>();

    function isMatch(): boolean {
        for (let [key, value] of tMap) {
            if ((sMap.get(key) || 0) < value) {
                return false;
            }
        }
        return true;
    }
    let left = 0;
    let right = 0;
    let result = "";
    let minLen = Infinity;
    while (right < s.length) {
        sMap.set(s[right], (sMap.get(s[right]) || 0) + 1);
        while (isMatch()) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                result = s.slice(left, right + 1);
            }
            sMap.set(s[left], (sMap.get(s[left]) || 0) - 1);
            left++;
        }
        right++;
    }
    return result;

};
// @lc code=end

