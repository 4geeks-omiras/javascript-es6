const rewire = require('rewire');
const fs = require('fs');
const path = require('path');

const file = rewire("./app.js");
const taxedPrices = file.__get__('taxedPrices');

test('The value of taxedPrices must be [121, 242, 363] ', () => {
    expect(taxedPrices).toEqual([121, 242, 363]) ;
});

test('.map() function must be used', () => {
    const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    const regex = /\.map\(/gm
    expect(regex.test(file.toString())).toBeTruthy();
});

test('Do not use a for or a while. You must use .map()', () => {
    const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    const regex = /for|while/gm
    expect(regex.test(file.toString())).toBeFalsy();
});