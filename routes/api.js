'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req,res)=>{
    console.log(req.url)
    var input = req.query.input;
    //console.log(req)
    console.log(input)
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    console.log(initUnit)

    var returnUnit = convertHandler.getReturnUnit(initUnit);
    var returnNum = convertHandler.convert(initNum, initUnit);
    
    var output = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    return res.send(output);
  })

};
