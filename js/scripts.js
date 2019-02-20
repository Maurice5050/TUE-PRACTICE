alert("working");

jQuery('h1').click(function(){
alert("This is a heading tag")
});
jQuery('p').click(function(){
    alert("This is a paragraph")
  })
  jQuery('img').click(function(){
    alert("This is an image")
  });
  Query("h1").click(function() {
    alert("This is not a header.");
    alert("I told you, THIS IS A HEADER!");
  });
  $(document).ready(function() {
    $("p").click(function() {
      $("img").show();
    });
  });
  $(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});
