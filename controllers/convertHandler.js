function ConvertHandler() {
	const DIGIT_REGEX = /[^a-zA-z]/g;
	const LETTERS_REGEX = /[^0-9.]/g;
	let invalidNumber = false;
	let invalidUnit = false;

  this.getNum = function(input) {
	console.log('getNum started');
	let result = input.match(DIGIT_REGEX) || 0;
	if (result === 0) {
		result = 1;
		invalidNumber = true;
		return result;
	};
	result = result.join('');
	return result;  
  };
  
  this.getUnit = function(input) {
	console.log('getUnit started');
	let result = input.match(LETTERS_REGEX) || '';
	if (result === '') {
		invalidUnit = true;
		return result;
	};
	result = result.join('');
	return result;
  };
  
  this.getReturnUnit = function(initUnit) {
	console.log('getReturnUnit started');
   	let result = '';

	switch (initUnit) {
		case 'gal':
			return result = 'kgs';
		case 'L' || 'l':
			return result = 'gal';
		case 'lbs' || 'lb':
			return result = 'kgs';
		case 'kg' || 'kgs':
			return result = 'lbs';
		case 'mi':
			return result = 'km';
		case 'km':
			return result = 'mi';
		default:
			return;
			//console.log('No match found for getReturnUnit');
			//return result = 'NO INIT UNIT';
		}

  };

  this.spellOutUnit = function(unit) {
	console.log('spellOutUnit started');
	let result = '';

	switch (unit) {
		case 'gal':
			return result = 'gallons';
		case 'L' || 'l':
			return result = 'liters';
		case 'lbs' || 'lb':
			return result = 'pounds';
		case 'kg' || 'kgs':
			return result = 'kilograms';
		case 'mi':
			return result = 'miles';
		case 'km':
			return result = 'kilometers';
		default:
			return;
			//console.log('No match found for spellOutUnit');
			//return result = 'NO SPELL OUT UNIT';
		}


  };
  
  this.convert = function(initNum, initUnit) {
	console.log('convert started');
	const galToL = 3.78541;
	const lbsToKg = 0.453592;
	const miToKm = 1.60934;
	
	let returnNum = 0;

		switch (initUnit) {
			case 'gal':
				returnNum = initNum * galToL;
				return +returnNum.toFixed(5); 
			case 'L' || 'l':
				returnNum = initNum / galToL;
				return +returnNum.toFixed(5); 
			case 'lbs' || 'lb':
				returnNum = initNum * lbsToKg;
				return +returnNum.toFixed(5); 
			case 'kg' || 'kgs':
				returnNum = initNum / lbsToKg;
				return +returnNum.toFixed(5); 
			case 'mi':
				returnNum = initNum * miToKm;
				return +returnNum.toFixed(5); 
			case 'km':
				returnNum = initNum / miToKm;
				return +returnNum.toFixed(5); 
			default:
				console.log('No match found for initUnit in this.convert');
				returnNum = 0;
				return returnNum; 
		}


  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {  
	console.log('getString started');
	if (invalidNumber === true && invalidUnit === true) {
		return 'invalid number and unit';
	} else if (invalidNumber === true) {
		return 'invalid number';
	} else if (invalidUnit === true) {
		return 'invalid unit';
	} else {

	let initialSpellOut = this.spellOutUnit(initUnit);
	let returnSpellOut = this.spellOutUnit(returnUnit);
	let result = `${initNum} ${initialSpellOut} converts to ${returnNum} ${returnSpellOut}`;

	return result;
	};


  };
  
}

module.exports = ConvertHandler;
