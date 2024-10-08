/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
        let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map[char]) {
            stack.push(char);
        } else {
            let last = stack.pop();
            if (char !== map[last]) {
                return false;
            }
        }
    }

    return stack.length === 0;

    
};

module.exports = { isValid };


