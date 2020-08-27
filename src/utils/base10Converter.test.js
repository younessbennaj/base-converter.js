import { convertFrom10To2, convertFrom2To10, convertFrom10To16 } from './base10Converter';

test('convert 45 to base 2', () => {
    expect(convertFrom10To2(45)).toBe('101101');
});

test('convert 101101 to base 10', () => {
    expect(convertFrom2To10(101101)).toBe('45');
});

test('convert 676 to base 16', () => {
    expect(convertFrom10To16(676)).toBe('2A4');
});