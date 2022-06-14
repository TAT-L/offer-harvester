var isSymmetric = function (root) {
    if (!root) return true
    return fun(root.left, root.right)
};

function fun(p1, p2) {
    if (!p1 && !p2) {
        return true
    }
    if (!p1 || !p2) {
        return false
    }
    if (p1.val !== p2.val) {
        return false
    }
    return fun(p1.left, p2.right) && fun(p1.right, p2.left)
}