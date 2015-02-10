$(document).ready(function(){
  window.dancers = [];
  $("#BlinkyDancer").on("click", function(event){
    var dancer = new BlinkyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
  $("#BouncyDancer").on("click", function(event){
    var dancer = new BouncyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
    $("#BatmanDancer").on("click", function(event){
    var dancer = new BatmanDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
    $("#DogDancer").on("click", function(event){
    var dancer = new DogDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
});

