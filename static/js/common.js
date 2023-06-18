$(function(){

    // 스크롤 시 헤더 고정
    $(document).scroll(function () {
        if($(this).scrollTop() > 100) {
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }
    });

    // 헤더 메뉴 & 컨텐츠 스크롤 연동
    $('.menu li, .menu-mo li').each(function() {
        $(this).click(function(e) {
            let thisOffset = $('.' + $(this).data('id')).offset().top - 130;
            $('html, body').animate({
                scrollTop: thisOffset
            }, 2000);
            $('.menu li').removeClass('on');
            $(this).addClass('on');
            e.stopPropagation();
        });
    });

    // 메뉴 열고 닫기
	if($('.menu-mo').length) {
		$(document).on('click', '.btn-menu-open', function(){
			$('.menu-mo').addClass('open');
		});
		$(document).on('click', '.btn-close', function(){
			$('.menu-mo').removeClass('open');
		});
	}
})