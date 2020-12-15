/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const q1TwoSum = function(nums, target) {
    let result = [];
    for (let i=0; i<nums.length; ++i) {
        // let newArr = nums.slice(i);
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[i] + nums[j] === target) {
                result.push(i, j);
                return result;
            }
        }
    }
    throw console.log('Illegal argument');
};

module.exports = q1TwoSum;