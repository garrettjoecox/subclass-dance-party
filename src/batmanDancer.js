var BatmanDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.setPosition(top, left);
  this.clock(timeBetweenSteps);
  this.$node.addClass("batman");
  this.$node.addClass("moving");
}

BatmanDancer.prototype = Object.create(Dancer.prototype);

BatmanDancer.prototype.constructor = BatmanDancer;

BatmanDancer.prototype.step = function(){
  var ran = Math.floor(Math.random()*2)+1;
    if (ran === 1){
      this.$node.attr('src', 'lib/batman_left.png');
      if(this.$node.hasClass("moving")){
        this.$node.animate({"left":"-=50"}, 200);
      }
    } else {
      this.$node.attr('src', 'lib/batman_right.png');
      if(this.$node.hasClass("moving")){
        this.$node.animate({"left":"+=50"}, 200);
      }
  }
}
