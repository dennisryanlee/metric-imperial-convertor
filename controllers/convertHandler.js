function ConvertHandler() {
	const DIGIT_REGEX = /\d|\.|\//g;		//  /[^a-zA-z]/g;
	const SLASH_REGEX = /\//g;
	const UNIT_REGEX = /(gal)|(mi)|(km)|(lbs)|(kg)|(lb)|(l)/gi;  // note 
				// that this will cause errors with 'mii' and 'kmm' etc.

  this.getNum = function(input) {
	let result = input.match(DIGIT_REGEX || []);
	if (result != null) {
	  result = result.join('');
	};

	let slashArray = input.match(SLASH_REGEX || []);
	let slashCount = 0;  
	if (slashArray != null) {
		slashCount = slashArray.length;
	};
	if (result === null) {
	// first test if there is a number at all - if not, default to one
	// note that if the actual number is "0" then this will match in regex and not
	// trigger this if clause
		result = 1;
		return result;
	} else if (slashCount > 1) {
	// then check if valid number - if fraction, that is okay;
		// but if double-fraction that should return error
		return 'invalid number';
	} else if (slashCount == 1) {
	// convert fraction to decimal
		const parseFraction = fraction => {
			const [numerator, denominator] = fraction.split('/').map(Number);
			return numerator / denominator;
		};
		console.log('parseFraction result is: ',parseFraction(result));
		return parseFraction(result);
	} else {	
	// default condition
		return result;
	};
  };

  this.getUnit = function(input) {
	let result = input.match(UNIT_REGEX || []);

	if (result === null) {
	// if there are no matching units then return 'invalid unit'
		return 'invalid unit';
	} else {
	// default condition
		result = result.join('');	     	
		return result;
	};
	
  };
 
  this.getReturnUnit = function(initUnit) {
   	let result = '';

	switch (initUnit) {
		case 'gal':
			return result = 'L';
		case 'L' || 'l':
			return result = 'gal';
		case 'lbs' || 'lb':
			return result = 'kg';
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
		}
  };
  
  this.convert = function(initNum, initUnit) {
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

	let initialSpellOut = this.spellOutUnit(initUnit);
	let returnSpellOut = this.spellOutUnit(returnUnit);

	let result = `${initNum} ${initialSpellOut} converts to ${returnNum} ${returnSpellOut}`;
	return result;

  };
}

module.exports = ConvertHandler;
