var BouncyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.setPosition(top, left);
  this.clock(timeBetweenSteps);
};
BouncyDancer.prototype = Object.create(Dancer.prototype);

BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function(){
  this.$node.addClass("mario");
  this.$node.animate({"top": "-=100" }).delay(100).animate({"top": "+=100"});
};
