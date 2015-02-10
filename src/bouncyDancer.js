var BouncyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.setPosition(top, left);
  this.clock(timeBetweenSteps);
};
BouncyDancer.prototype = Object.create(Dancer.prototype);

BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function(){
  this.$node.addClass("mario");
  // this.$node.toggleClass("mariojump");
  this.$node.animate({"top": "-=100" }, 10);
  this.$node.addClass("mariojump").delay(100).queue(function(next){
    $(this).removeClass("mariojump");
    $(this).animate({"top": "+=100"}, 10);
    next();
});
  // .delay(2000).animate({"top": "-=100" }).delay(100).animate({"top": "+=100"}).removeClass("mariojump");
};
