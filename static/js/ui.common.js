$(function(){

	$(document).on('click', 'a', function(e){
		e.preventDefault();
	});


	// btn-top 상단으로 이동
	// $(window).scroll(function(){
	// 	if($(this).scrollTop() > 100) {
	// 		$('.btn-top').fadeIn();
	// 	} else {
	// 		$('.btn-top').fadeOut();
	// 	}
	// });

	// $('.btn-top').click(function(e){
	// 	$('html, body').animate({scrollTop:0},1000);
	// 	e.preventDefault();
	// });

	// 스크롤 시 헤더 고정
	$(document).scroll(function () {
		if($(this).scrollTop() > 100) {
			$('#header').addClass('on');
		} else {
			$('#header').removeClass('on');
		}
	});

	  // 헤더 메뉴 & 컨텐츠 스크롤 연동
	  $(".menu li").each(function() {
        $(this).click(function(e) {
            var thisOffset = $("." + $(this).data('id')).offset().top -50;
            $("html, body").animate({
                scrollTop: thisOffset
            }, 2500);
            $(".menu li").removeClass("on");
            $(this).addClass('on');
            e.stopPropagation();
        });
    });

})