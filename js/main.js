//const scroll = new LocomotiveScroll({
   // el: document.querySelector('#main-block'),
   // smooth: true
  //});
  $(function(){
	var overlay = $('<div id="overlay"></div>');
	overlay.show();
	overlay.appendTo(document.body);
	$('.popup-onload').show();
	$('.close').click(function(){
	$('.popup-onload').hide();
	overlay.appendTo(document.body).remove();
	return false;
	});
	
	$('.x').click(function(){
	$('.popup').hide();
	overlay.appendTo(document.body).remove();
	return false;
	});
	});

$(document).ready(function(){
	"use strict";
	$('#slidr-carousel').carouFredSel({
		responsive:true,
		width:'100%',
		circular:true,
		scroll:{
			items:1,
			duration:400,
			pauseOnHover:true
			},
			auto:true,
			items:
			{
				visible:{
					min:1,
					max:1
			},
					height:"variable"
			},
			pagination:{
				container:".sliderpager",
				pageAnchorBuilder:false
				}
					
				
		
		});
		$(window).scroll(function(){
			var top = $(window).scrollTop();
			if(top>=70)
			{
				$("header").addClass('secondry');
				}
				else if($("header").hasClass('secondry'))
				{
					$("header").removeClass('secondry');
					}
			});
	});

	function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	  }
	  let mybutton = document.getElementById("myBtn");
  
	  // When the user scrolls down 20px from the top of the document, show the button
	  window.onscroll = function() {scrollFunction()};
	  
	  function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		  mybutton.style.display = "block";
		} else {
		  mybutton.style.display = "none";
		}
	  }

	  function closedialog(){
		let menuclose=document.getElementById('mobile-menu');
		if (menu.className === "mobile-menu-container") {
		  menu.className += " mobileopen";
		 
		} else {
		  menu.className = "mobile-menu-container";
		}
		
	  }
	  
	   function  myFunction()
		{
		let menu=document.getElementById('mobile-menu');
		if (menu.className === "mobile-menu-container") {
		  menu.className += " mobileopen";
		 
		} else {
		  menu.className = "mobile-menu-container";
		}
		
		}
	  
	  
		  var swiper = new Swiper(".mySwiper", {
			slidesPerView: 4,
			spaceBetween: 30,
			autoplay:{
			  delay:2400,
			  disableOnInteraction: false
			},
			freeMode: true,
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
		  });


		