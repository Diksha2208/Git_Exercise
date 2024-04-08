
const sortStrings = require('./sortStrings.js');

test('sorts an array of strings', () => {
    const input = ["apple", "banana", "mango", "cherry", "orange"];
    const output = ["apple", "banana", "cherry", "mango" , "orange"];
    expect(sortStrings(input)).toEqual(output);
});