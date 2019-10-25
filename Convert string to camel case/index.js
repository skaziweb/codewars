function toCamelCase(str) {
    if (str.length == 0) {
        return '';
    }
    return str.split(/[-_]/gmi).reduce((result, e) => {
        return result += e.slice(0, 1).toUpperCase() + e.slice(1, e.length);
    });
}