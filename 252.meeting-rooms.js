/*
 * @lc app=leetcode id=252 lang=javascript
 *
 * [252] Meeting Rooms
 *
 * https://leetcode.com/problems/meeting-rooms/description/
 *
 * algorithms
 * Easy (58.86%)
 * Likes:    2131
 * Dislikes: 117
 * Total Accepted:    528.9K
 * Total Submissions: 888.8K
 * Testcase Example:  '[[0,30],[5,10],[15,20]]'
 *
 * You are given an array of meeting times intervals where intervals[i] =
 * [starti, endi].
 *
 * A person can attend all meetings if no two meeting intervals overlap.
 * Meetings ending at time t and starting at time t do not overlap.
 *
 * ​​​​​​​Return true if a person can attend all meetings. Otherwise, return
 * false.
 *
 *
 * Example 1:
 * Input: intervals = [[0,30],[5,10],[15,20]]
 * Output: false
 * Example 2:
 * Input: intervals = [[7,10],[2,4]]
 * Output: true
 *
 *
 * Constraints:
 *
 *
 * 0 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= starti < endi <= 10^6
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < sortedIntervals.length; i++) {
    if (sortedIntervals[i][0] < sortedIntervals[i - 1][1]) {
      return false;
    }
  }
  return true;
}
// @lc code=end
