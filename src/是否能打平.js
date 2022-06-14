const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    // terminal: false
});

let lines = -1
let currentLine = 0
let inputs = []
rl.on('line', function (line) {

    if (lines < 0) {
        lines = parseInt(line.trim())
    } else {
        let tokens = line.split(' ');
        tokens = tokens.map((item) => {
            return parseInt(item)
        })
        inputs.push(tokens)
        currentLine++
    }
    if (currentLine === lines) {
        console.log(inputs)
        for (let data of inputs) {
            let [n, k, d1, d2] = data
            let games = n - k
            if (
                canDraw(d1 * 2 + d2, games) && canBecame(d2 * 2 + d1, k) ||
                canDraw(d2 * 2 + d1, games) && canBecame(d1 * 2 + d2, k) ||
                canDraw(d1 + d2, games) && canBecame(2 * d1 - d2, k) ||
                (canDraw(2 * d1 - d2, games) && d1 > d2 && canBecame(d1 + d2, k)) ||
                (canDraw(2 * d2 - d1, games) && d2 > d1 && canBecame(d1 + d2, k))
            ) {
                console.log("yes")
            } else {
                console.log("no")

            }
        }
    }

    function canBecame(points, k) {
        return (k - points) % 3 === 0 && k - points >= 0
    }

    function canDraw(points, games) {
        if (points > games || points < 0) return false
        if (points === games) return true
        else {
            return (games - points) % 3 === 0
        }
    }
})