/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones = stones.sort((a, b) => a - b)
        result = smash(stones[stones.length - 1], stones[stones.length - 2])
        stones.pop()
        stones.pop()
        if (result != null) {
            stones.push(result)
        }

    }
    return stones[0]
};

function smash(rock1, rock2) {
    if (rock1 == rock2) return 0
    return Math.abs(rock1 - rock2)
}
