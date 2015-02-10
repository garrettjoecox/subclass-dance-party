var DogDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.setPosition(top, left);
  this.clock(timeBetweenSteps);
};
DogDancer.prototype = Object.create(Dancer.prototype);

DogDancer.prototype.constructor = DogDancer;

DogDancer.prototype.step = function(){
  this.$node.addClass("dog");
  //this.$node.css("background", ": url('lib/dog.gif') no-repeat top left"rc);
};
