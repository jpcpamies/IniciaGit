// Script mobileMenu
$(function(){$("#mobileMenu").mobileMenu({combine:!1,groupPageText:"",nested:!0,prependTo:"nav",switchWidth:1e3,topOptionText:""})});var num=1200;$(window).bind("scroll",function(){$(window).scrollTop()>num?$(".boton").addClass("arriba"):$(".boton").removeClass("arriba")});var num=180;$(window).bind("scroll",function(){$(window).scrollTop()>num?$(".menu").addClass("fixed"):$(".menu").removeClass("fixed")});