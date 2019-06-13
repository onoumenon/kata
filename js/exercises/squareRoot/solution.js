const mySqrt = function (x) {
    if (x < 1) {
        return 0
    }
    let max = Math.floor(x / 2) + 1
    let min = 1
    let guess

    while (min + 1 < max) {
        guess = Math.floor((min + max) / 2)

        if (guess * guess > x) {
            max = guess
        }
        else if (guess * guess < x) {
            min = guess
        }
        else {
            return guess
        }
    }
    return min
};