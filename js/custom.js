// ---------Responsive-navbar-active-animation-----------

function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.height();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();


	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});


	$("#navbarSupportedContent").on("mouseenter","li",function(e){
		
        $('#navbarSupportedContent li').removeClass('active');
        $(this).addClass('active');
		
        var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		
		
        $(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});

	$("#navbarSupportedContent").on("scroll","li",function(e){
		
        $('#navbarSupportedContent li').removeClass('active');
        $(this).addClass('active');
		
        var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		
        $(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});

	
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});

$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});

$(window).on('scroll', function(){
	
	var sections = document.getElementsByClassName("scrollSection");
	var li = document.getElementsByClassName("li");

	if (  window.scrollY < sections[0].offsetTop + sections[0].offsetHeight ) {
		scrollTest(li[0])
	} 
	
	else if( window.scrollY < sections[1].offsetTop + sections[1].offsetHeight ) {
		scrollTest(li[1])
	} 
	
	else if( window.scrollY < sections[2].offsetTop + sections[2].offsetHeight ) {
		scrollTest(li[2])
	} 
	
	else if( window.scrollY < sections[3].offsetTop + sections[3].offsetHeight ) {
		scrollTest(li[3])
	} 
	
	else if( window.scrollY < sections[4].offsetTop + sections[4].offsetHeight ) {
		scrollTest(li[4])
	}
    
});

function scrollTest(li){


	$('#navbarSupportedContent li').removeClass('active');
	li.classList.add("active");  

	var activeWidthNewAnimHeight = $(li).height();
	var activeWidthNewAnimWidth = $(li).innerWidth();
	var itemPosNewAnimTop = $(li).position();
	var itemPosNewAnimLeft = $(li).position();
	
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
}

$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});


