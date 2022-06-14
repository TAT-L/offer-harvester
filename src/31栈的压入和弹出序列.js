/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let stack = []
    let j = 0
    for (let i = 0; i < pushed.length; i++) {
        if (popped[j] === pushed[i]) {
            j++
        } else {
            stack.push(pushed[i])
        }
        while (stack[stack.length - 1] === popped[j] && stack.length > 0) {
            stack.pop()
            j++
        }
    }
    return !stack.length
};
// function validateStackSequences(pushed, popped) {
//     let stack = []
//     for(let i = 0; i< pushed.length; i++){
//         stack.unshift(pushed[i])
//        while(popped[0] === stack[0] && popped.length){
//            popped.shift()
//            stack.shift()     
//        }  
//     }
//     return !stack.length
// };