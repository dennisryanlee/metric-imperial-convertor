const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
	suite('convertHandler', function(){
		test('convertHandler should correctly read a whole number input', function () {
			assert.equal(convertHandler.getNum('5mi'), 5);
		});

		test('convertHandler should correctly read a decimal number input', function() {
			assert.equal(convertHandler.getNum('5.5mi'),5.5);
		});

		test('convertHandler should correctly read a fractional input', function() {
			assert.equal(convertHandler.getNum('1/2mi'),0.5);
		});

		test('convertHandler should correctly read a a fractional input with a decimal', function() {
			assert.equal(convertHandler.getNum('1.5/2mi'),0.75);
		});
	
		test('convertHandler should return an error on a double-fraction', function() {
			assert.isNull(convertHandler.getNum('3/2/3mi'));
		});

		test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', function() {
			assert.equal(convertHandler.getNum('mi'),1);
		});
		
		test('convertHandler should correctly read each valid input unit', function() {
			assert.equal(convertHandler.getUnit('4gal'),'gal');
			assert.equal(convertHandler.getUnit('4L'),'L');
			assert.equal(convertHandler.getUnit('4lbs'),'lbs');
			assert.equal(convertHandler.getUnit('4kg'),'kg');
			assert.equal(convertHandler.getUnit('4mi'),'mi');
			assert.equal(convertHandler.getUnit('4km'),'km');
		});
		
		test('convertHandler should correctly return and error for an invalid input unit', function() {
			assert.equal(convertHandler.getUnit('4min'),'invalid unit');
		});

		test('convertHandler should return the correct return unit for each valid input unit', function() {
			assert.equal(convertHandler.getReturnUnit('gal'),'L');
			assert.equal(convertHandler.getReturnUnit('L'),'gal');
			assert.equal(convertHandler.getReturnUnit('lbs'),'kg');
			assert.equal(convertHandler.getReturnUnit('kg'),'lbs');
			assert.equal(convertHandler.getReturnUnit('mi'),'km');
			assert.equal(convertHandler.getReturnUnit('km'),'mi');
		});

		test('convertHandler should correctly return the spelled-out string unit for each valid input unit', function() {
			assert.equal(convertHandler.spellOutUnit('gal'),'gallons');
			assert.equal(convertHandler.spellOutUnit('L'),'liters');
			assert.equal(convertHandler.spellOutUnit('lbs'),'pounds');
			assert.equal(convertHandler.spellOutUnit('kg'),'kilograms');
			assert.equal(convertHandler.spellOutUnit('mi'),'miles');
			assert.equal(convertHandler.spellOutUnit('km'),'kilometers');
		});

		test('convertHandler should correctly convert gal to L', function() {
			assert.equal(convertHandler.convert('1','gal'),3.78541);
		});
		
		test('convertHandler should correctly convert L to gal', function() {
			assert.equal(convertHandler.convert('1','L'), 0.26417);
		});
		
		test('convertHandler should correctly convert mi to km', function() {
			assert.equal(convertHandler.convert('1','mi'),1.60934);
		});

		test('convertHandler should correctly convert km to mi', function() {
			assert.equal(convertHandler.convert('1','km'),0.62137);
		});

		test('convertHandler should correctly convert lbs to kg', function() {
			assert.equal(convertHandler.convert('1','lbs'),0.45359);
		});

		test('convertHandler should correctly convert kg to lbs', function() {
			assert.equal(convertHandler.convert('1','kg'),2.20462);
		});
	});
});

