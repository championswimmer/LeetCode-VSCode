/*
 * @lc app=leetcode id=66 lang=golang
 *
 * [66] Plus One
 */
package main

// @lc code=start
func plusOne(digits []int) []int {
	len := len(digits)
	for i := len - 1; i >= 0; i-- {
		digits[i]++
		if digits[i] < 10 {
			return digits
		}
		digits[i] = 0
	}
	return append([]int{1}, digits...)
}

// @lc code=end
