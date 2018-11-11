function pow(n, p) {
    let sum = 1;
    do {
        sum *= n;
        p--
    } while (p > 0)
    return sum;
}

function digPow(n, p) {
    let str = '' + n;
    let dig = 0;
    for (let i = 0; i < str.length; i++) {
        dig += pow(+str[i], p + i);
    }
    k = dig / n
    if (dig % n == 0) {
        return k;
    } else {
        return -1
    }
}
