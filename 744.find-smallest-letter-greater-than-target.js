/*
 * @lc app=leetcode id=744 lang=javascript
 *
 * [744] Find Smallest Letter Greater Than Target
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > target) return letters[i];
    }
    return letters[0];
};
// @lc code=end

