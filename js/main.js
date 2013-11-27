// Script Facebook ============================================================
// ==============================================================================
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_ES/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



// Script Disqus ============================================================
// Carga los comentarios======================================================
var disqus_shortname = 'iniciagit'; 

(function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();

// Script Disqus ============================================================
// Llama al API de Disqus======================================================
var disqus_shortname = 'iniciagit'; 

(function () {
    var s = document.createElement('script'); s.async = true;
    s.type = 'text/javascript';
    s.src = '//' + disqus_shortname + '.disqus.com/count.js';
    (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());

    


// Script efecto parallax ============================================================
// ==============================================================================
$(function(){
      $.stellar({
          horizontalScrolling: false,
          verticalOffset: 170
      });
  });


// Script mobileMenu ============================================================
// ==============================================================================

$(function(){
$('.mobileMenu').mobileMenu({
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

  var num2 = 175; //number of pixels before modifying styles

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


