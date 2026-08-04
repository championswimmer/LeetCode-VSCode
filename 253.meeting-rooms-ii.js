/*
 * @lc app=leetcode id=253 lang=javascript
 *
 * [253] Meeting Rooms II
 *
 * https://leetcode.com/problems/meeting-rooms-ii/description/
 *
 * algorithms
 * Medium (52.04%)
 * Likes:    7261
 * Dislikes: 177
 * Total Accepted:    1.2M
 * Total Submissions: 2.3M
 * Testcase Example:  '[[0,30],[5,10],[15,20]]'
 *
 * Given an array of meeting time intervals intervals where intervals[i] =
 * [starti, endi], return the minimum number of conference rooms required.
 *
 *
 * Example 1:
 * Input: intervals = [[0,30],[5,10],[15,20]]
 * Output: 2
 * Example 2:
 * Input: intervals = [[7,10],[2,4]]
 * Output: 1
 *
 *
 * Constraints:
 *
 *
 * 1 <= intervals.length <= 10^4
 * 0 <= starti < endi <= 10^6
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0])
  const currentMeetings = []
  let maxRooms = 0

  for (const interval of sortedIntervals) {
    const [start, end] = interval
    // Remove meetings that have ended
    while (currentMeetings.length > 0 && currentMeetings[0][1] <= start) {
      currentMeetings.shift()
    }

    // Add the current meeting's end time to the list of ongoing meetings
    currentMeetings.push(interval)
    // Sort the ongoing meetings by their end times
    currentMeetings.sort((a, b) => a[1] - b[1])

    // Update the maximum number of rooms needed
    maxRooms = Math.max(maxRooms, currentMeetings.length)

  }
  return maxRooms
}
// @lc code=end
