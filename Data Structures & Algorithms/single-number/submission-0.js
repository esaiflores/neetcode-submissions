class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {

        const set = new Set(); 

        for (const num of nums) {
            if (set.has(num)) {
                set.delete(num)
            } else {
            set.add(num)

            }

        }

        return Array.from(set)[0]; 
    }
}
