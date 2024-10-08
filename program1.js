/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
        let stack = [];
    
    // Map of closing to opening brackets
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };


    for (let char of s) {

        if (char in bracketMap) {
            
            let topElement = stack.length > 0 ? stack.pop() : '#';
            
            
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            
            stack.push(char);
        }
    }

    return stack.length === 0;

    
};

module.exports = { isValid };


