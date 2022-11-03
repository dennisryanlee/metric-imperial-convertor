'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

	app.route('/api/convert').get((req, res) => {
		let input = req.query.input;
		try {
			// console.log('GET working');
			// console.log('input ' + input);
			// console.log(req.query);
			// console.log(typeof input);

			// console.log(convertHandler);
	//		let x = convertHandler.getNum(input);
			// let x = convertHandler.getNum(); // try to get this to work right
	//		console.log(x);
     
	//		let y = convertHandler.getUnit(input);
	//		console.log(y);

	//		console.log(convertHandler);
			
			let initNum = convertHandler.getNum(input);
			console.log('initNum is: ',initNum);
			let initUnit = convertHandler.getUnit(input);
			console.log('initUnit is: ',initUnit);
			let returnNum = convertHandler.convert(initNum, initUnit);
			console.log('returnNum is: ',returnNum);
			let returnUnit = convertHandler.getReturnUnit(initUnit);
			console.log('returnUnit is: ',returnUnit);
			
			let initialSpellOut = convertHandler.spellOutUnit(initUnit);
			console.log('initialSpellOut is: ',initialSpellOut);
			let returnSpellOut = convertHandler.spellOutUnit(returnUnit);
			console.log('returnSpellOut is: ',returnSpellOut);

			
			let result = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);	

	//		let result = convertHandler.getString(input);

			res.json(result);
      
		} catch (err) {
			console.log('Error - catch block');
			res.json({
				error: 'invalid input'
			});
		};
	});
  
};
