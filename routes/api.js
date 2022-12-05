'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
	let convertHandler = new ConvertHandler();

	app.route('/api/convert').get((req, res) => {
		let input = req.query.input;
		console.log('input is: ',input);
		try {
			let invalidNumber = false;
			let invalidUnit = false;

			let initNum = convertHandler.getNum(input);
			let initUnit = convertHandler.getUnit(input);

			if (initNum === 'invalid number') {
				invalidNumber = true;
			};
			
			if (initUnit === 'invalid unit') {
				invalidUnit = true;
			};

			if (invalidNumber === true && invalidUnit === true) {
			// if both the number and unit are invalid
				res.json({ 
					error: 'invalid number and unit'
				});
			} else if (invalidNumber === true) {
			// if just the number is invalid
				res.json({
					error: 'invalid number'
				});
			} else if (invalidUnit === true) {
			// if just the unit is invalid
				res.json({
					error: 'invalid unit'
				});
			} else {
			// otherwise, proceed normally

				let returnNum = convertHandler.convert(initNum, initUnit);
				let returnUnit = convertHandler.getReturnUnit(initUnit);
				let initialSpellOut = convertHandler.spellOutUnit(initUnit);
				let returnSpellOut = convertHandler.spellOutUnit(returnUnit);
				let finalString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);	
				
				res.json({
					initNum: initNum,
					initUnit: initUnit === 'l' ? 'L' : initUnit,
					returnNum: returnNum,
				 	returnUnit: returnUnit === 'l' ? 'L' : returnUnit,
				 	string: finalString
				});
			};
		} catch (err) {
			console.log('Error - catch block');
			res.json({
				error: 'invalid input'
			});
		};
	});
  
};
