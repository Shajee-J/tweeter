$(document).ready(function() {

  
$(window).on('scroll', function() {
 if (document.body.scrollTop > 360 || document.documentElement.scrollTop > 650){
  $("#error").empty();
};
});

});