function ConvertHandler() {
	const DIGIT_REGEX = /[^a-zA-z]/g;
	const LETTERS_REGEX = /[^0-9.]/g;

  this.getNum = function(input) {
	let result = input.match(DIGIT_REGEX); 
	result = result.join('');
	return result;  
  };
  
  this.getUnit = function(input) {
	let result = input.match(LETTERS_REGEX);
	result = result.join('');
	return result;
  };
  
  this.getReturnUnit = function(initUnit) {
   	let result;

	switch (initUnit) {
		case 'gal':
			result = 'kgs';
			break;
		case 'L' || 'l':
			result = 'gal';
			break;
		case 'lbs' || 'lb':
			result = 'kgs';
			break;
		case 'kg' || 'kgs':
			result = 'lbs';
			break;
		case 'mi':
			result = 'km';
			break;
		case 'km':
			result: 'mi';
			break;
		default:
			console.log('No match found for getReturnUnit');
			break;
		}

		return result; 
  };

  this.spellOutUnit = function(unit) {
	let result;

	switch (unit) {
		case 'gal':
			result = 'gallons';
			break;
		case 'L' || 'l':
			result = 'liters';
			break;
		case 'lbs' || 'lb':
			result = 'pounds';
			break;
		case 'kg' || 'kgs':
			result = 'kilograms';
			break;
		case 'mi':
			result = 'miles';
			break;
		case 'km':
			result: 'kilometers';
			break;
		default:
			console.log('No match found for spellOutUnit');
			break;
		}

		return result; 

  };
  
  this.convert = function(initNum, initUnit) {
	const galToL = 3.78541;
	const lbsToKg = 0.453592;
	const miToKm = 1.60934;
	
	let returnNum;

		switch (initUnit) {
			case 'gal':
				returnNum = initNum * galToL;
				break;
			case 'L' || 'l':
				returnNum = initNum / galToL;
				break;
			case 'lbs' || 'lb':
				returnNum = initNum * lbsToKg;
				break;
			case 'kg' || 'kgs':
				returnNum = initNum / lbsToKg;
				break;
			case 'mi':
				returnNum = initNum * miToKm;
				break;
			case 'km':
				returnNum = initNum / miToKm;
				break;
			default:
				console.log('No match found for initUnit in this.convert');
				break;
		}

	return +returnNum.toFixed(5); 

  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {  
	let initialSpellOut = spellOutUnit(initUnit);
	console.log(initialSpellOut);
//	let returnSpellOut = spellOutUnit(returnUnit);
//	let result = `${initNum} ${initialSpellOut} converts to ${returnNum} ${returnSpellOut}`;

	return 'hello'//result;
  };
  
}

module.exports = ConvertHandler;
