const leapYear = require('./leapYear');

test('Is 2000 a leap year? True', () => {
    expect(leapYear(2000)).toBe(true);
});


test('Is 2001 a leap year? False', () => {
    expect(leapYear(2001)).toBe(false);
});

test('Is 2012 a leap year? True', () => {
    expect(leapYear(2012)).toBe(true);
});

test('Is 2032 a leap year? True', () => {
    expect(leapYear(2032)).toBe(true);
});

test('Is 2041 a leap year? Frue', () => {
    expect(leapYear(2041)).toBe(false);
});