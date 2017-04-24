var BMI = function(height, weight){
  this.height = Number(height);
  this.weight = Number(weight);
  this.bmi = 0;
};

var bmiP = BMI.prototype;

bmiP.calculate = function(){
  this.bmi =( this.weight ) / ( this.height * this.height );
};

bmiP.between = function (a, b){
  let x = this.bmi;
  return (a <= x) && (x < b);
};

bmiP.category = function(){
  let bmi = this.bmi;
  let category;
  if(bmi < 15){
    category = "Very severely underweight";
  }else if(this.between(15, 16)){
    category = "Severely underweight";
  }else if(this.between(16, 18.5)){
    category = "Underweight";
  }else if( this.between(18.5 , 25) ){
    category = "Normal";
  }else if(this.between(25,30)){
    category= "Overweight";
  }else if(this.between(30,35)){
    category= "Obese Class I (Moderately obese)";
  }else if(this.between(35,40)){
    category= "Obese Class II (Severely obese)";
  }else if(bmi > 40){
    category= "Obese Class III (Very severely obese)";
  }
  return category;
};


module.exports = BMI;
