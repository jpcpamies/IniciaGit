// Script mobileMenu ============================================================
// ==============================================================================
$(function(){$("#mobileMenu").mobileMenu({combine:!1,groupPageText:"",nested:!0,prependTo:"nav",switchWidth:880,topOptionText:""})});var num=180;$(window).bind("scroll",function(){$(window).scrollTop()>num?$(".boton").addClass("arriba"):$(".boton").removeClass("arriba")});var num2=185;$(window).bind("scroll",function(){$(window).scrollTop()>num2?$(".menu").addClass("fixed"):$(".menu").removeClass("fixed")});var num3=120;$(window).bind("scroll",function(){$(window).scrollTop()>num3?$(".tope").addClass("fijo"):$(".tope").removeClass("fijo")});