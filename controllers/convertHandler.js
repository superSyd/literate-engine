function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    
    let myRegex = /[^gal|^km|^lbs|^kg|^mi|^l]$/
    result = myRegex.exec(input.toLowerCase());

    if(result == ""){
      result = 1
    } else
    if(isNaN(result)){
      result = "error";
    }

    return result;
  };
  
  this.getUnit = function(input) {
    let result;

     let myRegex = /[gal|km|lbs|kg|mi|l]$/
    result = myRegex.exec(input.toLowerCase);

    if(result == ""){
      result = 'error';
    } else if(result == "l"){
      result = result.toUpperCase
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    switch(initUnit.toLowerCase()){
      case "gal":
        result = "L";
        break;
      case "km":
        result = "mi";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "l":
        result = "gal";
        break;
    }
    
    return result;
  };

  this.spellOutUnit = function(num,unit) {
    let result;

    switch(unit.toLowerCase()){
      case "gal":
        if(num > 1){
          result = 'gallons';
        } else{
          result = "gallon";
        }
        
        break;
      case "km":
        if(num > 1){
        result = "kilometers";
        } else {
          result = "kilometer";
        }
        break;
      case "lbs":
        if(num > 1){
        result = "pounds";
        } else {
          result = "pound";
        }
        break;
      case "kg":
        if(num > 1){
        result = "kilograms";
        } else {
          result = "kilogram";
        }
        break;
      case "mi":
        if(num > 1){
        result = "miles";
        } else {
          result = "mile";
        }
        break;
      case "l":
        if(num > 1){
        result = "liters";
        } else {
          result = "liter";
        }
        break;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch(initUnit.toLowerCase()){
      case "gal":
        result = initNum * galToL;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "l":
        result = initNum / galToL;
        break;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    result = { 
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: initNum+" "+this.spellOutUnit(initNum,initUnit)+" converts to "+returnNum+" "+this.spellOutUnit(returnNum,returnUnit)
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
