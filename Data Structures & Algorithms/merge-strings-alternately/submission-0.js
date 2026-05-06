class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {

        let left1 = 0;
        let left2 = 0;

        let arr = [];

        while (left1 < word1.length || left2 < word2.length) {
            
            if (left1 < word1.length) {
                arr.push(word1[left1])
                left1++
            }
            
             if (left2 < word2.length) {
                arr.push(word2[left2])
                left2++
            }
          
        }


        

        return arr.join('')
    }
}
