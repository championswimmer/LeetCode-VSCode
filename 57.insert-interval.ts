/*
 * @lc app=leetcode id=57 lang=typescript
 *
 * [57] Insert Interval
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
    if (intervals.length === 0) return [newInterval];
    if (intervals[intervals.length - 1][1] < newInterval[0] ) {
        return [...intervals, newInterval];
    }

    if (intervals[0][0] > newInterval[1] ) {
        return [newInterval, ...intervals];
    }

    let spliceStart = -1;
    let spliceEnd = -1;

    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[0] <= intervals[i][1] && spliceStart == -1) {
            spliceStart = i;
        }

        if (newInterval[1] < intervals[i][0] && spliceEnd == -1) {
            spliceEnd = i - 1;
        }

        if (newInterval[1] == intervals[i][0] && spliceEnd == -1) {
            spliceEnd = i;
        }
    }

    if (spliceStart == -1) spliceStart = 0
    if (spliceEnd == -1) spliceEnd = intervals.length - 1

    const delta = spliceEnd - spliceStart + 1;
    const newIntervalStart = Math.min(intervals[spliceStart][0], newInterval[0]);
    const newIntervalEnd = Math.max(intervals[spliceEnd][1], newInterval[1]);
    newInterval = [newIntervalStart, newIntervalEnd];
    console.log(intervals)
    console.log(newInterval);
    console.log(spliceStart, spliceEnd, delta)
    intervals.splice(spliceStart, delta, newInterval);

    return intervals;
};
// @lc code=end

