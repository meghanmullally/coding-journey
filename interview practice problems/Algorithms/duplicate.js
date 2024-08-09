// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1: 
// Input nums = [1,2,3,4,5,5]
// output: true 

// Example 2: 
// input nums = [1,2,3,4]
// output: false 

// Solution 1: 

class Solution {
    hasDuplicate(nums) {
        // Step 1: Create a new Set to store unique values
        const numsSet = new Set();

        // Step 2: Iterate through each number in the input array
        for (const num of nums) {
            // Step 3: Check if the Set already contains the current number
            if (numsSet.has(num)) return true;
            // Step 4: If not, add the current number to the Set
            numsSet.add(num);
        }
        // Step 5: If no duplicates were found, return false
        return false;
    }
}

// Solution 2: 
function containsDuplicate(nums) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);
    
    // Step 2: Check for duplicates
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true; // Found a duplicate
        }
    }
    
    // Step 3: No duplicates found
    return false;
}

// Example usage:
console.log(containsDuplicate([1,2,3,4,5,5])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
