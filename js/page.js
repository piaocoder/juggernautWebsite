
(function(){
	var h = $(window).height();
	$(window).on('resize',function(){
		h=$(window).height();
	})
	function changePage(num){
		if(num <= 0){
			num = 0;
			console.log(num)
			$("body").stop().animate({
				top: -h * num
			}, 200)
		}

	}
	$('.header .nav ul li').click(function(){
		var idx = $('.header .nav ul li').index(this)
		console.log(idx);
		changePage(idx);
	})
})()