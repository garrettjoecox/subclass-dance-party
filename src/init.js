$(document).ready(function(){
  window.dancers = [];
  $(".addDancerButton").on("click", function(event){
    var test = window[this.id];
    var dancer = new test(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 3000
    );
    $('body').append(dancer.$node);
  });
});

function lineUp(){
  $(".batman").removeClass("moving");
  $(".mario").animate({left:$("body").width() * Math.random()});
  $(".batman").animate({left:$("body").width() * Math.random()});
  $(".disco").animate({left:$("body").width() * Math.random()});
}

function party(){
  $(".dancer").each(function(index){
    var styleSettings = {
      top: $("body").height() * Math.random(),
      left: $("body").width() * Math.random()
    }
    $(this).animate(styleSettings)
    $(this).addClass("moving");
    // index.css(styleSettings);
  });
}
