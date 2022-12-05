const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
	test('convertHandler should correctly read a whole number input', function () {
		assert.isNotNull('5mi','correctly read a whole number');
	});

	test('convertHandler should correctly read a decimal number input', function() {
		assert.isNotNull('5.5mi','correctly read a decimal number');
	});

	test('convertHandler should correctly read a fractional input', function() {
		assert.isNotNull('1/2mi','correctly read a fractional input');
	});

	test('convertHandler should correctly read a a fractional input with a decimal', function() {
		assert.isNotNull('1.5/2mi','correctly read a fractional input with a decimal');
	});
});

