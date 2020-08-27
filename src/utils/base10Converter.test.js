import { convertFrom10To2, convertFrom2To10 } from './base10Converter';

test('convert 45 to base 2', () => {
    expect(convertFrom10To2(45, 2)).toBe('101101');
});

test('convert 101101 to base 10', () => {
    expect(convertFrom2To10(101101, 2)).toBe('45');
});