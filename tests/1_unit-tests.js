const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  suite('Input', ()=>{
    
    //convertHandler should correctly read a whole number input.
    test("Correctly read whole number input", ()=>{
      assert.equal(convertHandler.getNum('1kg'), 1,'can read whole number')
    });
//convertHandler should correctly read a decimal number input.
    test("Correctly read a decimal number input", ()=>{
      assert.equal(convertHandler.getNum('1.1kg'), 1.1, 'can read decimal number')
    })
//convertHandler should correctly read a fractional input.
    test("Correctly read a fractional input", ()=>{
      assert.equal(convertHandler.getNum('1/4kg'),0.25, 'can read fractional input')
    })
//convertHandler should correctly read a fractional input with a decimal.
  test("Correctly read a fractional input with a decimal", ()=>{
      assert.equal(convertHandler.getNum('1.5/4kg'),0.375, 'can read a fractional input with a decimal')
    })
//convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
    test("Correctly return an error on a double-fraction", ()=>{
      assert.equal(convertHandler.getNum('3/2/3kg'),'invalid number', 'can return an error on a double-fraction')
    })
//convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
    test("Correctly default to a numerical input of 1 when no numerical input is provided", ()=>{
      assert.equal(convertHandler.getNum('kg'),1, 'can return 1 when no numerical input is provided')
    })
//convertHandler should correctly read each valid input unit.
    test("Correctly read each valid input unit", ()=>{
      assert.equal(convertHandler.getUnit('2kg'),'kg', 'can return input unit')
    })
//convertHandler should correctly return an error for an invalid input unit.
    test("Correctly return an error for an invalid input unit", ()=>{
      assert.equal(convertHandler.getUnit('2kf'),'invalid unit', 'can return an error on invalid input unit')
    })
//convertHandler should return the correct return unit for each valid input unit.
    test("Correctly return unit for each valid input unit", ()=>{
      assert.equal(convertHandler.getReturnUnit('kg'),'lbs', 'can return unit for each valid input unit')
    })
//convertHandler should correctly return the spelled-out string unit for each valid input unit.
    test("Correctly return the spelled-out string unit for each valid input unit", ()=>{
      assert.equal(convertHandler.spellOutUnit(1,'kg'),'kilogram', 'can return the spelled-out string unit for each valid input unit')
    })
  })

  suite('Convert', ()=>{
    //convertHandler should correctly convert gal to L.
    test("correctly convert gal to L", ()=>{
      assert.equal(convertHandler.convert(1, 'gal'),3.78541, 'can correctly convert gal to L')
    })
//convertHandler should correctly convert L to gal.
    test("correctly convert L to gal", ()=>{
      assert.equal(convertHandler.convert(1, 'L'),0.26417, 'can correctly convert L to gal')
    })

//convertHandler should correctly convert mi to km.
    test("correctly convert mi to km", ()=>{
      assert.equal(convertHandler.convert(1, 'mi'),1.60934, 'can correctly convert mi to km')
    })

//convertHandler should correctly convert km to mi.
    test("correctly convert km to mi", ()=>{
      assert.equal(convertHandler.convert(1, 'km'),0.62137, 'can correctly convert km to mi')
    })

//convertHandler should correctly convert lbs to kg.
    test("correctly convert lbs to kg", ()=>{
      assert.equal(convertHandler.convert(1, 'lbs'),0.45359, 'can correctly convert lbs to kg')
    })

//convertHandler should correctly convert kg to lbs
    test("correctly convert kg to lbs", ()=>{
      assert.equal(convertHandler.convert(1, 'kg'),2.20462, 'can correctly convert kg to lbs')
    })
  })



});
