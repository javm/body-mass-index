var expect = require('expect.js');
var Promise = require('bluebird');
var bmi = require('../models/bmi');

describe('bmi', function(){

  it('Calculates the body mass index', function(done){
    let height = 1.65;
    let weight = 50;
    let bmiObj = new bmi(height, weight);
    bmiObj.calculate();
    expect(bmiObj.bmi).to.be.above(0);
    expect(bmiObj.category()).to.be("Underweight");
    done();
  });
});
