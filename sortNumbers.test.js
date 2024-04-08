const sortNumber = require('./sortNumbers.js');

test('sortNumber should sort the array in ascending order', () => {
    const input = [5, 2, 8, 9, 1];
    const expectedOutput = [1, 2, 5, 8, 9];

    const result = sortNumber(input);

    expect(result).toEqual(expectedOutput);
});