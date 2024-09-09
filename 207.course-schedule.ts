/*
 * @lc app=leetcode id=207 lang=typescript
 *
 * [207] Course Schedule
 *
 * https://leetcode.com/problems/course-schedule/description/
 *
 * algorithms
 * Medium (47.28%)
 * Likes:    16358
 * Dislikes: 736
 * Total Accepted:    1.7M
 * Total Submissions: 3.6M
 * Testcase Example:  '2\n[[1,0]]'
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to
 * numCourses - 1. You are given an array prerequisites where prerequisites[i]
 * = [ai, bi] indicates that you must take course bi first if you want to take
 * course ai.
 * 
 * 
 * For example, the pair [0, 1], indicates that to take course 0 you have to
 * first take course 1.
 * 
 * 
 * Return true if you can finish all courses. Otherwise, return false.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: true
 * Explanation: There are a total of 2 courses to take. 
 * To take course 1 you should have finished course 0. So it is possible.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 * Output: false
 * Explanation: There are a total of 2 courses to take. 
 * To take course 1 you should have finished course 0, and to take course 0 you
 * should also have finished course 1. So it is impossible.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= numCourses <= 2000
 * 0 <= prerequisites.length <= 5000
 * prerequisites[i].length == 2
 * 0 <= ai, bi < numCourses
 * All the pairs prerequisites[i] are unique.
 * 
 * 
 */

// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const courseGraph = new Map<number, number[]>();
    const canStartFrom = new Array(numCourses).fill(0);
    for (const [course, preReq] of prerequisites) {
        if (courseGraph.has(preReq)) {
            courseGraph.get(preReq)!.push(course);
        } else {
            courseGraph.set(preReq, [course]);
        }
        canStartFrom[course]++;
    }
    const queue: number[] = [];
    for (let i = 0; i < canStartFrom.length; i++) {
        if (canStartFrom[i] === 0) {
            queue.push(i);
        }
    }
    let count = 0;
    while (queue.length) {
        const course = queue.shift()!;
        count++;
        if (courseGraph.has(course)) {
            for (const c of courseGraph.get(course)!) {
                canStartFrom[c]--;
                if (canStartFrom[c] === 0) {
                    queue.push(c);
                }
            }
        }
    }
    return count === numCourses;
};
// @lc code=end

canFinish(4, [[1, 0], [0, 2], [2, 1]]); // false