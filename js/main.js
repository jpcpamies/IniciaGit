// Script mobileMenu ============================================================
// ==============================================================================

$(function(){
$('#mobileMenu').mobileMenu({
  combine: false,         
  groupPageText: '',     
  nested: true,        
  prependTo: 'nav',      
  switchWidth: 1000,     
  topOptionText: ''
});
})


// Script Ir inicio =============================================================
// ==============================================================================

var num = 180; //number of pixels before modifying styles

		$(window).bind('scroll', function () {
		    if ($(window).scrollTop() > num) {
		        $('.boton').addClass('arriba');
		    } else {
		        $('.boton').removeClass('arriba');
		    }
		});


// Script nav fixed =============================================================
// ==============================================================================

  var num2 = 180; //number of pixels before modifying styles

  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num2) {
          $('.menu').addClass('fixed');
      } else {
          $('.menu').removeClass('fixed');
      }
  });
