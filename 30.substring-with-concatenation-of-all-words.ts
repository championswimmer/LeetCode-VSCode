/*
 * @lc app=leetcode id=30 lang=typescript
 *
 * [30] Substring with Concatenation of All Words
 */

// @lc code=start
function findSubstring(s: string, words: string[]): number[] {
    // remove edge cases
    if (s.length === 0 || words.length === 0) {
        return [];
    }
    if (s.length < words.join("").length) {
        return [];
    }

    const answers: number[] = [];

    const wordLength= words[0].length;
    const numWords = words.length;
    const windowLength = wordLength * numWords;

    const sortedMatcher = words.sort().join("");

    function isValid(window) {
        const chunks = []
        for (let i = 0; i < windowLength; i += wordLength) {
            chunks.push(window.substring(i, i + wordLength));
        }
        
        const windowMatcher = chunks.sort().join("");
        return windowMatcher === sortedMatcher;
    }

    for (let i = 0; i < s.length - windowLength + 1; i++) {
        const window = s.substring(i, i + windowLength);
        if (isValid(window)) {
            answers.push(i)
        }
    }

    return answers;
};
// @lc code=end

