var isSubStructure = function (A, B) {
    if (!A || !B) {
        return false
    }
    return same(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

let same = function (A, B) {
    if (!B) {
        return true
    }
    if (!A) {
        return false
    }
    if (A.val !== B.val) {
        return false
    }
    return same(A.left, B.left) && same(A.right, B.right)
}