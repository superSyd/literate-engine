'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req,res)=>{
    var input = req.body.input;
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    var returnUnit = convertHandler.getReturnUnit(initUnit);
    var returnNum = convertHandler.convert(initNum, initUnit);
    var output = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    return res.send(output);
  })

};
