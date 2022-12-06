Tracking:

12/06/22:
Accomplished - continue work on unit tests - finished unit tests and passing!
- finished functional tests - passing! 
Tomorrow - 

12/05/22:
Accomplished - it appears only lowercase units are being accepted; need to change regex to accept uppercase units also; change switch statements to accept uppercase also; resolve comparing arrays in JavaScript - used JSON.stringify - to resolve 'l' init unit problem - unfortunately this didn't solve the problem! = trying different solution - didn't work!; one additional try - change res json initUnit response
didn't work! - trying additional solution; adding to lowercase to solution; additional solution - change if/else on initUnit
Afternoon work - starting adding unit tests
Evening work - more work with tests; clearing up some old console.logs
Source - use res.json trick from here: https://replit.com/@epirito/boilerplate-project-metricimpconverter#routes/api.js
Tomorrow - continue to work on unit tests

12/04/22:
Accomplished - switch statements in convertHandler function were not formatted correctly - changed to have single conditions (operators don't work); change console.logs to resolve 'invalid unit' issues; resolve unit regex to match only exact string; add exact wording for string to return 'invalid number and unit'
Tomorrow - unsure why FCC test about 'upper/lower' case is failing - resolve later; failing on current tests below (NOW RESOLVED); add testing

1min - error (should return 'invalid unit')
1//2min - error (should return 'invalid number and unit')

12/02/22:
Accomplished - resolved problem with some units - I was returing "kgs" in the getReturnUnit function incorrectly; post new version on replit to test; resolve gal to L (was kg incorrectly); remove unneeded console.logs; add additional console.log to test input
Tomorrow - 
Units:
gal - OK
L - OK
mi - OK
km - OK
lbs - OK
kg - OK

FCC tests (input):
1gal
10gal
1l - error
1lbs
10lbs
1kg
10kg
1mi
10mi
1km
10km
1gal
10L
1l - error
1min - error
1//2gal
1//2min - error
mi
1/5mi
1.5/7km
3/2.7km
2mi


11/30/22:
Accomplished - resolved handling of conversion, spellOutUnit, and getString functions 
Tomorrow - resolve why some units are not working properly and others are okay (test all units)

11/29/22 #2:
Accomplished - resolved handling wrong unit in getUnit function
Tomorrow - proceed to implement additional functions after getNum and getUnit

11/29/22 #1:
Accomplished - commented out bulk of code; resolved handling wrong number in getNum function
Tomorrow - 

11/15/22:
Accomplished - recorded pseudocode for handling edge cases
Tomorrow - write code for handling edge cases

11/14/22:
Accomplished - moved project to replit; ran initial FreeCodeCamp tests on project; started to look into how to handle edge cases on user input (put in zero or invalid units or values)
Tomorrow - need to change formula so invalid unit or value (or both) shows only that for input

11/05/22: got formula working correctly (I think?)
tomorrow - post work so far to replit and test with FreeCodeCamp tests

11/04/22: change switch statements to remove breaks and just do returns
tomorrow - keep troubleshooting formulas

11/02/22: work on returnNum and returnUnit; work on formula
tomorrow - formula mostly working; work on spelling out units - particularly on return unit value

11/01/22: concat string result from regex
tomorrow - work on returning letter input, then processing into formula

10/29/22: got regex to work for converthandler
tomorrow - work on returning results - need to concatenate string from regex results

Previously - forked FreeCodeCamp project; copied code over to a new repository
