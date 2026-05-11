class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {

         let stack = [];

        for (const op of operations) {

            if (!isNaN(op)) {
                stack.push(Number(op));

            } else if (op === "+") {
                stack.push(stack[stack.length - 1] + stack[stack.length - 2]);

            } else if (op === "D") {
                stack.push(stack[stack.length - 1] * 2);

            } else if (op === "C") {
                stack.pop();
            }
        }

       
        return stack.reduce((a, b) => a + b, 0);
    }
}
