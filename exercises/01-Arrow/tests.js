const rewire = require('rewire');
const fs = require('fs');
const path = require('path');

const file = rewire("./app.js");
const getColor = file.__get__('updateCounter');

test('function updateCounter should exist', function () {
    expect(updateCounter).toBeTruthy();
});

test('The function "updateCounter" should increase the value of the parameter and return it', () => {
    const file = rewire("./app.js");
    const updateCounter = file.__get__("updateCounter");
    expect(updateCounter(1).toBe(2)) ;
});

test('You have to use => notation', () => {
    const file = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
    const regex = /\=\>/gm
    expect(regex.test(file.toString())).toBeTruthy();
});