function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let myNumberRegex = /^\d*$|^-?\d*$|^\d*\/?\d*$|^-?\d*\/?-?\d*$|^\.?$|^-?\.?$|^\.?\/?\.?$|^\d*\.?\d*$|^-?\d*\.?\d*$|^\d*\.?\d*\/?\d*\.?\d*$|^-?\d*\.?\d*\/?-?\d*\.?\d*$/g;

    let myNonUnitRegex = /[^A-z]/g
    resultNonUnit = input.toLowerCase().match(myNonUnitRegex)

        console.log(resultNonUnit, "HEERE1 getNum")

    if(resultNonUnit != null){
      result = resultNonUnit.join("");
      result = result.match(myNumberRegex)

      if(result == null){
      result = "invalid number";
      } else {
      result = new Function('return '+result)();
      result = parseFloat(result)
      }
              console.log(result, "HEERE2 getNum")
 
    }

    else

    if(resultNonUnit == null){
      result = 1
    }

            console.log(result, "HEERE3 getNum")


    return result;
  };
  
  this.getUnit = function(input) {
    let result;

     let myRegex = /gal$|km$|lbs$|kg$|mi$|l$/g
    result = input.toLowerCase().match(myRegex);

    console.log(input, "HEERE1 getUnit")

    if(result != null){
      result = result.join("");
    }

    if(result == "" || result == null){
      result = 'invalid unit';
    } else if(result == "l"){
      result = result.toUpperCase();
    }

        console.log(result, "HEERE2 getUnit")

    
    return result.toString();
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    let myInitUnit = initUnit.toLowerCase()

    switch(myInitUnit){
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

    if(num == "invalid number" && unit == "invalid unit"){
      return "invalid number and unit"
    }else
    if(num == "invalid number"){
      return "invalid number";
    } else if(unit == "invalid unit"){
      return "invalid unit"
    }else {

    let myUnit = unit.toLowerCase()

    switch(myUnit){
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
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    if(initNum == "invalid number" && initUnit == "invalid unit"){
      return "invalid number and unit"
    }else
    if(initNum == "invalid number"){
      return "invalid number";
    } else if(initUnit == "invalid unit"){
      return "invalid unit"
    }else {

      let myInitUnit = initUnit.toLowerCase()


    switch(myInitUnit){
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
    
    return parseFloat(result.toFixed(5));

    }

    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    if(initNum == "invalid number" && initUnit == "invalid unit"){
      return "invalid number and unit"
    }else
    if(initNum == "invalid number"){
      return "invalid number";
    } else if(initUnit == "invalid unit"){
      return "invalid unit"
    }else {
      result = { 
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: initNum+" "+this.spellOutUnit(initNum,initUnit)+" converts to "+returnNum+" "+this.spellOutUnit(returnNum,returnUnit)
    }
    
    return result; 
    }

    
  };
  
}

module.exports = ConvertHandler;
