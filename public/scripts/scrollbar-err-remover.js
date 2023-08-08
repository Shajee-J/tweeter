$(document).ready(function() {

  // will get rid off error msg before it overlaps with the fixed nav
  
$(window).on('scroll', function() {
 if (document.body.scrollTop > 360 || document.documentElement.scrollTop > 650){
  $("#error").empty();
};
});

});