var MarioDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.setPosition(top, left);
  this.clock(timeBetweenSteps);
  this.$node.addClass("mario");
};

MarioDancer.prototype = Object.create(Dancer.prototype);

MarioDancer.prototype.constructor = MarioDancer;

MarioDancer.prototype.step = function(){
  this.$node.attr('src', 'lib/mario.png');
  this.$node.animate({top:"-=50px"});
  this.$node.animate({top:"+=50px"});
};