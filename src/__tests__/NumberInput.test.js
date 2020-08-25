import NumberInput from '../components/NumberInput';

function runTest() {
    return true;
}

beforeEach(() => {
    //The code here will be executed before each tests in the file runs
    console.log('Before test');
})

afterEach(() => {
    // "    "   " after each testes in the files completes
    console.log('After test');
})


test('Run a simple test', () => {
    expect(runTest()).toBe(true);
});
