'use strict'
let products = [];
let counter = 0;

var fs = require('fs');

fs.readFile('test1.txt', 'utf8', (err, data) => {
    var rows = data.split('\n');
    for (var k = 0; k < (rows.length - 1); k++) {
        var object = rows[k].split(' ');
        var item = new Object;
        item.id = object[0];
        item.name = object[1];
        item.category = object[2];
        item.expiry = object[3];
        products[counter] = item;
        counter++;
    }
    console.log("---------------------Sorting by Name--------------------");
    sortByName();
    console.log(products);
    read2();
});

function read2() {
    fs.readFile('test2.txt', 'utf8', (err, data) => {
        var rows = data.split('\n');

        for (var k = 0; k < (rows.length - 1); k++) {
            var object = rows[k].split(' ');
            var item = new Object;
            item.id = object[0];
            item.name = object[1];
            item.category = object[2];
            item.expiry = object[3];
            products[counter] = item;
            counter++;
        }

        console.log("---------------------Sorting by Category--------------------");
        sortByCategory();
        console.log(products);
        read3();
    });
}

function read3() {
    fs.readFile('test3.txt', 'utf8', (err, data) => {
        //console.log(data);
        var rows = data.split('\n');
        //console.log(rows);
        for (var k = 0; k < (rows.length - 1); k++) {
            var object = rows[k].split(' ');
            //console.log(object);
            var item = new Object;
            item.id = object[0];
            item.name = object[1];
            item.category = object[2];
            item.expiry = object[3];
            products[counter] = item;
            counter++;
        }

        console.log("---------------------Sorting by Date--------------------");
        sortByDate();
        console.log(products);

        console.log("---------------------Filter by bakery--------------------");
        var filter = function(array, callback) {
            var filtered_array = [];
            array.forEach(function(element, index, array) {
                if (callback(element, index, array)) {
                    filtered_array.push(element);
                }
            });
            return filtered_array;
        };

        var catFilter = filter(products, function(product) {
            return product.category != 'bakery';
        });
        console.log(catFilter);

        console.log("---------------------Sorting by Number--------------------");
        sortByNumber();
        console.log(products);
    });
}


var sortByName = () => {
    products.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    })
};

var sortByNumber = () => {
    products.sort((a, b) => {
        if (parseFloat(a.id) < parseFloat(b.id)) return -1;
        if (parseFloat(a.id) > parseFloat(b.id)) return 1;
        return 0;
    })
};

var sortByCategory = () => {
    products.sort((a, b) => {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return 0;
    })
};

var sortByDate = () => {
    products.sort((a, b) => {
        const aExpiry = (new Date(a.expiry).getTime() / 1000);
        const bExpiry = (new Date(b.expiry).getTime() / 1000);

        if (aExpiry < bExpiry) return -1;
        if (aExpiry > bExpiry) return 1;
        return 0;
    })
};
