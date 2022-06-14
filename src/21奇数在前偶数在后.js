/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let i = 0,
        j = nums.length - 1
    let temp = 0
    while (i < j) {
        while (nums[i] % 2 === 1) {
            i++
        }
        while (nums[j] % 2 === 0) {
            j--
        }
        if (i < j) {
            temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
            j--
        }

    }
    return nums
};
console.log(exchange([3, 4, 3, 4, 7]))