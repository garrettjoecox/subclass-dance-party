var BatmanDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.setPosition(top, left);
  this.clock(timeBetweenSteps);
};
BatmanDancer.prototype = Object.create(Dancer.prototype);

BatmanDancer.prototype.constructor = BatmanDancer;

BatmanDancer.prototype.step = function(){
  this.$node.addClass("batman")
  // this.$node.animate({"top": "-=100" }).delay(100).animate({"top": "+=100"});
  var ran = Math.floor(Math.random()*2)+1;
  if (ran === 1){
    this.$node.animate({"left":"-=50"});
    this.$node.addClass("batman-left");
  } else {
    this.$node.animate({"left":"+=50"});
    this.$node.removeClass("batman-left");
  };
};
