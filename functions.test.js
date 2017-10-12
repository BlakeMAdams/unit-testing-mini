const func = require('./functions');



describe('greeting tests', () => {
	test('greeting("James") should return "Hello, James."', () => {
		expect(func.greeting("James")).toBe("Hello, James.");
		expect(func.greeting("Jill")).toBe("Hello, Jill.");
	})
	
})

describe('calc tests', () => {
	test('returnTwo() should return 2', () => {
		expect(func.returnTwo()).toEqual(2);
	})
	test('add(num,num) should return 2 numbers sum', () => {
		expect(func.add(1, 2)).toBe(3);
		expect(func.add(5, 9)).toBe(14);
	})

	test('multiply(num,num) should return 2 numbers product', () => {
		expect(func.multiply(1, 2)).toBe(2);
		expect(func.multiply(5, 9)).toBe(45);
	})

	test('divide(num,num) should return 2 numbers quotiant', () => {
		expect(func.divide(1, 2)).toBe(.5);
		expect(func.divide(8, 4)).toEqual(2);
	})

	test('subtract(num,num) should return 2 numbers subtraction', () => {
		expect(func.subtract(1, 2)).toBe(-1);
		expect(func.subtract(5, 9)).toBe(-4);
	})

})