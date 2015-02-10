var Dancer = function (top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
};

Dancer.prototype.constructor = Dancer;

Dancer.prototype.clock = function(timeBetweenSteps){
  var _this = this;
  this.step();
  setInterval(function(){
    _this.step()
  }, timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
