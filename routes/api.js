'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

	app.route('/api/convert').get((req, res) => {
		let input = req.query.input;
		try {
			console.log('GET working');
			console.log('input ' + input);
			console.log(req.query);
			console.log(typeof input);

			console.log(convertHandler);
			let x = convertHandler.getNum(input);
			// let x = convertHandler.getNum(); // try to get this to work right
			console.log(x);
      
			res.json('success');
      
		} catch (err) {
			console.log('Error - catch block');
			res.json({
				error: 'invalid input'
			});
		};
	});
  
};
