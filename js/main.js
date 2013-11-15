
// Script mobileMenu
$(function(){
$('#mobileMenu').mobileMenu({
  combine: false,         
  groupPageText: '',     
  nested: true,        
  prependTo: 'nav',      
  switchWidth: 992,     
  topOptionText: ''
});
})

// Script nav fixed
  var num = 180; //number of pixels before modifying styles

  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {
          $('.menu').addClass('fixed');
      } else {
          $('.menu').removeClass('fixed');
      }
  });
