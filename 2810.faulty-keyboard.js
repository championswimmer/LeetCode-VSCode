/*
 * @lc app=leetcode id=2810 lang=javascript
 *
 * [2810] Faulty Keyboard
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let stack = []; 
    let reversals = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'i') {
          stack = stack.reverse()
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join("");
};
// @lc code=end

