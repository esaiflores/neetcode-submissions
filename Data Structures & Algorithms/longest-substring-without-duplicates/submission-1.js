class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let maxLength = 0;
        let start = 0; 
        let set = new Set(); 


        for (let i = 0; i < s.length; i++) {

           while(set.has(s[i])) {
            set.delete(s[start]);
            start++; 
           }

           set.add(s[i])

           maxLength = Math.max(maxLength, i - start + 1 )
            
           

        }

        return maxLength; 
    }
}
