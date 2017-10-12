module.exports = {

	getTotal(arr) {
	
		var total = arr.reduce((prev, curr) => { 
			return prev + Number(curr.value.slice(1))
			  },0)
			  
		return total
	}
}