function findShort(s) {
    let arr = s.split(' ');
    arr.sort(function compare(a, b) {
        if (a.length < b.length) {
            return -1;
        }
        if (a.length > b.length) {
            return 1;
        }
        return 0;
    })
    return arr[0].length;
}