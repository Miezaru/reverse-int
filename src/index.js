module.exports = function reverse(n) {
    n = String(n);
    let arr = [];
    for (let i = 0; i < n.length; i++) {
        if (n[i] === "-") continue;
        arr.push(n[i]);
    }
    arr = Number(arr.reverse().join(""));
    return arr;
};
