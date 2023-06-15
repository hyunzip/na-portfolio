$(function(){

	$(document).on('click', 'a', function(e){
		e.preventDefault();
	});


	// btn-top 상단으로 이동
	$(window).scroll(function(){
		if($(this).scrollTop() > 100) {
			$('.btn-top').fadeIn();
		} else {
			$('.btn-top').fadeOut();
		}
	});

	$('.btn-top').click(function(e){
		$('html, body').animate({scrollTop:0},1000);
		e.preventDefault();
	});

	// AOS plugin
	if ($('*[data-aos]').length) {
		AOS.init();
	}
	
})