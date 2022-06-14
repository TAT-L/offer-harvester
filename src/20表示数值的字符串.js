/**
 * @param {string} s
 * @return {boolean}
 */


var isNumber = function (s) {
    let i = 0
    s = s.trim() 
    let len = s.length
    let flag = signInter(s)
   
    if (s[i] === '.') {
        i++
    flag =  unsignInter(s) || flag
    } 
    if (s[i] === 'e' || s[i] === 'E') {
        i++
        flag = flag && signInter(s)
    }
    return flag && i >= len


    function unsignInter(s) {
        let index = i
        while (i < len && s[i] >= '0' && s[i] <= '9') {
            i++
        }
        return i > index
    }

    function signInter(s) {
        if (s[i] === '-' || s[i] === '+') {
            i++
        }
        return unsignInter(s)
    }

};
console.log(isNumber("32.e4"))
