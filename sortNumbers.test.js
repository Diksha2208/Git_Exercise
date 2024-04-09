const sortNumber = require('./sortNumbers.js');

test('sortNumber should sort the array in ascending order', () => {
    const input = [5, 2, 8, 9, 1];
    const Output = [1, 2, 5, 8, 9];

try{
    expect(sortNumber(input)).toEqual(Output);
} catch (error) {
    console.log(error);
}
});