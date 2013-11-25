// Script mobileMenu ============================================================
// ==============================================================================

$(function(){
$('#mobileMenu').mobileMenu({
  combine: false,         
  groupPageText: '',     
  nested: true,        
  prependTo: 'nav',      
  switchWidth: 880,     
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


// Script nav fixed movil =============================================================
// ==============================================================================

  var num2 = 185; //number of pixels before modifying styles

  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num2) {
          $('.menu').addClass('fixed');
      } else {
          $('.menu').removeClass('fixed');
      }
  });


// Script nav fixed escitorio =============================================================
// ==============================================================================

  var num3 = 120; //number of pixels before modifying styles

  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num3) {
          $('.tope').addClass('fijo');
      } else {
          $('.tope').removeClass('fijo');
      }
  });


