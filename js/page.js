
(function(){
	var pageNum = 0.5;
	var flg = true;
	var h = $(window).height();
	$(window).on('resize',function(){
		h=$(window).height();
	})
	// 
	function changePage(num){
		if(num <= 0){
			num = 0.5;
		}else if(num > $(".mainbox>div").size()){
			num = Math.floor($(".mainbox>div").size() - 1)+0.5
		}
		$('.header .nav ul li').eq(Math.floor(num)).addClass("checked").siblings().removeClass()
		// console.log(num)
		// console.log(- h * num);
		$("body").stop().animate({
			top: -h * Math.floor(num) 
		}, 200);
		$(".positionFixed").stop().animate({
			top: h * Math.floor(num)
		}, 200);
		return Math.floor(num)+0.5;
	}
	$('.header .nav ul li').click(function(){
		var idx = $('.header .nav ul li').index(this);
		// console.log(idx);
		pageNum = changePage(idx);
		// console.log(pageNum)
		// pageNum = idx;
	})
	$(document).on("mousewheel DOMMouseScroll", function(e) {
		var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
			(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
		// console.log(delta);
		if(flg){
			pageNum -= delta;
			pageNum = changePage(pageNum);
			// console.log(pageNum);
			flg = false;

			setTimeout(function() {
				flg = true;
			}, 750);
		}
	})
})()