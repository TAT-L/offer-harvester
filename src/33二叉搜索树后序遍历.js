/**
 * @param {number[]} postorder
 * @return {boolean}
 */



var verifyPostorder = function (postorder) {

    if (!postorder || postorder.length === 0)
        return false

    let len = postorder.length
    const root = postorder[len - 1]
    let i
    for (i = 0; i < len; i++) {
        if (postorder[i] > root) {
            break
        }
    }

    for (let j = i; j < len; j++) {
        if (postorder[j] < root) return false
    }
    let left = right = true

    if (i > 0 ) {
        if(i === len){
            left = verifyPostorder(postorder.slice(0, i-1))
        }else {
             left = verifyPostorder(postorder.slice(0, i))
        }
       
    }
    if (i < len - 1) {
      right =  verifyPostorder(postorder.slice(i,len-1))
    }
    return left && right
};

console.log(verifyPostorder([5, 2, -17, -11, 25, 76, 62, 98, 92, 61]))