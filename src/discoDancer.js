var DiscoDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.setPosition(top, left);
  this.clock(timeBetweenSteps);
  this.$node.attr('src', 'lib/disco.png');
  this.$node.addClass("disco")
  this.$node.css("height","100px");

};

DiscoDancer.prototype = Object.create(Dancer.prototype);

DiscoDancer.prototype.constructor = DiscoDancer;

DiscoDancer.prototype.step = function(){
    var node = this.$node
    var angle = 0;
    setInterval(function(){
        angle+=1;
        node.rotate(angle);
    },10);
};