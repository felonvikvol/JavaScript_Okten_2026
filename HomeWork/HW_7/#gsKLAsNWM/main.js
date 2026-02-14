Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.myFilter = function(callback) {
    let filter = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filter.push(this[i]);
        }
    }

    return filter;
};

let arr = [10, 20, 30, 40, 50];

arr.myForEach(function(value, index) {
    console.log(value,index);
});

let filtered = arr.myFilter(function(value) {
    return value % 2 === 0;
});
