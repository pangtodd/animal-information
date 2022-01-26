$(document).ready( function() {
  $('input:radio[name=Animal]').change(function(){
    const animal = $("input:radio[name=Animal]:checked").val();

    if(animal === "Koala") {
      $("#koala-info").show();
      $("#walrus-info").hide();
      $("#crocodile-info").hide();
    } else if(animal === "Walrus") {
      $("#walrus-info").show();
      $("#crocodile-info").hide();
      $("#koala-info").hide();
    } else {
      $("#crocodile-info").show();
      $("#walrus-info").hide();
      $("#koala-info").hide();
    }
  });
});









// $(document).ready(function() {
//   const age = parseInt(prompt("How old are you?"));

//   const over21 = age > 21;

//   if (over21) {
//     $('#drinks').show();
//   } else if (age === 21) {
//     alert("Now don't go wild!");
//     $('#drinks').show();
//   } else {
//     $('#under-21').show();
//   }
// });