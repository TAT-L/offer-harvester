/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let result = []
    bianli(root, 0)
    return result

    function bianli(root, level) {   //使用先序遍历，并记录每次遍历的层数
        if (root) {
            if (result[level]) {
                result[level].push(root.val)
            } else {
                result[level] = [root.val]
            }
            bianli(root.left, level + 1)
            bianli(root.right, level + 1)
        }

    }
};

var levelOrder = function (root) { //层序遍历
    if (!root) return []
    let result = []
    let temp = [root]
    while (temp.length) {
        result.push([])
        let len = temp.length
        for (let i = 0; i < len; i++) {
            let node = temp.shift()
            result[result.length - 1].push(node.val)
            if (node.left) temp.push(node.left)
            if (node.right) temp.push(node.right)
        }

    }
    return result
};