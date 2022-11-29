'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
	let convertHandler = new ConvertHandler();

	app.route('/api/convert').get((req, res) => {
		let input = req.query.input;
		try {
			/*
			Logic to go here:

			First - run init num on input
				if initNum is not a valid number, toggle "invalid number"
			Second - run init Unit on input
				if initUnit is not a valid unit, toggle "invalid unit"
			Third - see if both conditions apply,
				if so - then return 'invalid unit and invalid number'
				if just 'invalid number' - return 'invalid number'
				if just 'invalid unit' - return 'invalid unit'

			Otherwise, proceed to process normally
			*/
			let invalidNumber = false;
			let invalidUnit = false;

			let initNum = convertHandler.getNum(input);
			if (initNum === 'invalid number') {
				invalidNumber = true;
			};
			
			let initUnit = convertHandler.getUnit(input);
			if (initUnit === 'invalid unit') {
				invalidUnit = true;
			};

			if (invalidNumber === true && invalidUnit === true) {
			// if both the number and unit are invalid
				res.json({ 
					error: 'invalid unit and invalid number'
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
				res.json({
					initNum: initNum,
					initUnit: initUnit
				});
			};


			/*
			let returnNum = convertHandler.convert(initNum, initUnit);
			let returnUnit = convertHandler.getReturnUnit(initUnit);
			let initialSpellOut = convertHandler.spellOutUnit(initUnit);
			let returnSpellOut = convertHandler.spellOutUnit(returnUnit);
			let finalString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);	
		
			res.json({
				 returnNum: returnNum,
				 returnUnit: returnUnit,
				 string: finalString
			 });
			 */
      
		} catch (err) {
			console.log('Error - catch block');
			res.json({
				error: 'invalid input'
			});
		};
	});
  
};
