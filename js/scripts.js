$(function(){
  $("#form").submit(function(){
    event.preventDefault();
    var sentance = $("#userIn").val().split(" ");
    console.log(sentance);
    threeOrMore = [];
    sentance.forEach(function(word){
      if((word.length) >= 3){
        threeOrMore.push(word)
      }

      alert(threeOrMore);
    });
    threeOrMore.reverse();
    var newString = threeOrMore.join(" ");
    $(".show").append(newString);
  console.log(newString);



});

});
