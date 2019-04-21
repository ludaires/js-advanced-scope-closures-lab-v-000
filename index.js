function produceDrivingRange(blockRange){
  return function(num1, num2){
    let range = (parseInt(num2, 10) - parseInt(num1, 10));
    if (range < blockRange){
      let result = blockRange - range;
      return `within range by ${result}`;
    }
    else { 
      result = range - blockRange;
      return `${result} blocks out of range`;
    }
  };
}

function produceTipCalculator(percNumber){
  return function(num){
    return num * percNumber;
  }
}

function createDriver(){
  let driverId = 0;

  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
