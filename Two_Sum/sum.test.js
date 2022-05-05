const sum = require('./sum');

test('add 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

test('add 10 + 90 to equal 100', () => {
    expect(sum(10,90)).toBe(100);
});

test('add 255 + 135 to equal 390', () => {
    expect(sum(255,135)).toBe(390);
});