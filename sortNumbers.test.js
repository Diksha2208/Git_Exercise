const sortNumber = require('./sortNumbers.js');

test('sortNumber should sort the array in ascending order', () => {
    const input = [5, 2, 8, 9, 1];
    const expectedOutput = [1, 2, 5, 8, 9];
//test test for sortNumber
    const result = sortNumber(input);
try{
    expect(result).toEqual(expectedOutput);
} catch (error) {
    console.log(error);
}
});