/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
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


const result = twoSum([1,2,3,4,5], 7);
console.log('result', result);