
$(document).ready(function () {
  console.log("Start JS");



  $('img.logoCodepen').mouseenter(function(){
    var elt = $(this);
    elt.attr('src','images/Button-Fill-Black-Large.png');
  });
  $('img.logoCodepen').mouseleave(function(){
    var elt = $(this);
    elt.attr('src','images/Button-Fill-White-Large.png');
  });

  $('img.logoGithub').mouseenter(function(){
    var elt = $(this);
    elt.attr('src','images/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png');
  });
  $('img.logoGithub').mouseleave(function(){
    var elt = $(this);
    elt.attr('src','images/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png');
  });





});// EndReady