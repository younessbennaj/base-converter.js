import { convertFrom10To } from './base10Converter';

test('convert 45 to base 2', () => {
    expect(convertFrom10To(45, 2)).toBe('101101');
});