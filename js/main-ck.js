// Script mobileMenu
$(function(){$("#mobileMenu").mobileMenu({combine:!1,groupPageText:"",nested:!0,prependTo:"nav",switchWidth:992,topOptionText:""})});var num=180;$(window).bind("scroll",function(){$(window).scrollTop()>num?$(".menu").addClass("fixed"):$(".menu").removeClass("fixed")});