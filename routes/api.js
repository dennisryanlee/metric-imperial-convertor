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

			let initNum = convertHandler.getNum(input);
			let initUnit = convertHandler.getUnit(input);
			let returnNum = convertHandler.convert(initNum, initUnit);
			let returnUnit = convertHandler.getReturnUnit(initUnit);
			let initialSpellOut = convertHandler.spellOutUnit(initUnit);
			let returnSpellOut = convertHandler.spellOutUnit(returnUnit);
			let finalString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);	
		
			res.json({
				 initNum: initNum, 
				 initUnit: initUnit,
				 returnNum: returnNum,
				 returnUnit: returnUnit,
				 string: finalString
			 });
      
		} catch (err) {
			console.log('Error - catch block');
			res.json({
				error: 'invalid input'
			});
		};
	});
  
};
