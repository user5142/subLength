const subLength = (string, char) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++
        }
    }
    if (count !== 2) {
        return 0;
    } else {
        let a = string.indexOf(char);
        let b = string.lastIndexOf(char);
        return b - a + 1;
    }
};

console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0
