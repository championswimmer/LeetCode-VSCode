/*
 * @lc app=leetcode id=140 lang=typescript
 *
 * [140] Word Break II
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): string[] {
    let sentences: string[] = [];

    for (let i = 1; i <= s.length; i++) {
        let word = s.substring(0, i);
        if (wordDict.includes(word)) {
            if (i === s.length) {
                sentences.push(word);
            } else {
                let rest = wordBreak(s.substring(i), wordDict);
                for (let sentence of rest) {
                    sentences.push(word + ' ' + sentence);
                }
            }
        }
    }

    return sentences;
};
// @lc code=end

