const stockValues = require('./mockData/stockData')
const stockFunc = require('./stock');

test('checking stock values', ()=> {
	var testTotal = 0;
	for(let i=0; i<stockValues.length; i++){
		
		testTotal += Number(stockValues[i].value.slice(1));
	}
	expect(stockFunc.getTotal(stockValues)).toBe(
		testTotal
	)
})