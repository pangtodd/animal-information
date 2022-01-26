$(document).ready( function() {
  const animal = $("input:radio[name=Animal]:checked").val();

  if(animal === "Koala") {
    $("#koala-info").show();
  } else if(animal === "Walrus") {
    $("#walrus-info").show();
  } else {
    $("crocodile-info").show();
  }
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