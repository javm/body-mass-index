var BMI = function(height, weight){
  this.height = Number(height);
  this.weight = Number(weight);
  this.bmi = 0;
};

var bmiP = BMI.prototype;

bmiP.calculate = function(){
  this.bmi =( this.weight ) / ( this.height * this.height );
};

module.exports = BMI;
