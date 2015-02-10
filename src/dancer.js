var Dancer = function (top, left, timeBetweenSteps){
  this.$node = $('<img class="dancer">');
  this.stop = false;
  this.$node.mouseover(function(){
    var styleSettings = {
      top: $("body").height() * Math.random(),
      left: $("body").width() * Math.random()
    }
    $(this).animate(styleSettings);
  })
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
