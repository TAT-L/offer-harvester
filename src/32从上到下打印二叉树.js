/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let result = [root]
    let index = 0
    // let a = []
    while (result[index] != undefined) {
        // getResult(result[index])
        if (result[index].left) result.push(result[index].left)
        if (result[index].right) result.push(result[index].right)
        // a.push(result[index].val)
        index++

    }
    // return a
    return result.map((node) => {
        return node.val
    })

    // function getResult(root) {
    //     if (root.left) result.push(root.left)
    //     if (root.right) result.push(root.right)

    // }
};