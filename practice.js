/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let frequency = {};
    let noOfOperations = 0;

    for (let x of nums) {
        frequency[x] ? frequency[x] += 1 : frequency[i] = 1;
    }

    for (let y of Object.keys(frequency)) {
        if (frequency[x] === 1) return -1;
        noOfOperations += Math.ceil(frequency[i] / 3);
    }

    return noOfOperations;


};