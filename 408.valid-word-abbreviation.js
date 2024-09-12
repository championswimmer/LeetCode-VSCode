/*
 * @lc app=leetcode id=408 lang=javascript
 *
 * [408] Valid Word Abbreviation
 *
 * https://leetcode.com/problems/valid-word-abbreviation/description/
 *
 * algorithms
 * Easy (36.02%)
 * Likes:    757
 * Dislikes: 2243
 * Total Accepted:    212.8K
 * Total Submissions: 589.7K
 * Testcase Example:  '"internationalization"\n"i12iz4n"'
 *
 * A string can be abbreviated by replacing any number of non-adjacent,
 * non-empty substrings with their lengths. The lengths should not have leading
 * zeros.
 * 
 * For example, a string such as "substitution" could be abbreviated as (but
 * not limited to):
 * 
 * 
 * "s10n" ("s ubstitutio n")
 * "sub4u4" ("sub stit u tion")
 * "12" ("substitution")
 * "su3i1u2on" ("su bst i t u ti on")
 * "substitution" (no substrings replaced)
 * 
 * 
 * The following are not valid abbreviations:
 * 
 * 
 * "s55n" ("s ubsti tutio n", the replaced substrings are adjacent)
 * "s010n" (has leading zeros)
 * "s0ubstitution" (replaces an empty substring)
 * 
 * 
 * Given a string word and an abbreviation abbr, return whether the string
 * matches the given abbreviation.
 * 
 * A substring is a contiguous non-empty sequence of characters within a
 * string.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: word = "internationalization", abbr = "i12iz4n"
 * Output: true
 * Explanation: The word "internationalization" can be abbreviated as "i12iz4n"
 * ("i nternational iz atio n").
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: word = "apple", abbr = "a2e"
 * Output: false
 * Explanation: The word "apple" cannot be abbreviated as "a2e".
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= word.length <= 20
 * word consists of only lowercase English letters.
 * 1 <= abbr.length <= 10
 * abbr consists of lowercase English letters and digits.
 * All the integers in abbr will fit in a 32-bit integer.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    if (word == abbr) return true;
    ai = 0
    wi = 0 

    num = ''

    while (ai < abbr.length) {
        if (abbr[ai] >= '0' && abbr[ai] <= '9') {
            if (num == '' && abbr[ai] == '0') return false;
            num += abbr[ai];
        } else {
            if (num != '') {
                wi += parseInt(num);
                num = '';
            }
            if (wi >= word.length || word[wi] != abbr[ai]) return false;
            wi++;
        }
        ai++;
    }
    if (num != '') {
        wi += parseInt(num);
    }
    return wi == word.length;
};
// @lc code=end

