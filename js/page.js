
(function(){
	var pageNum = 0.5;
	var flg = true;
	

	$('.header .nav ul li').click(function(){
		var idx = $('.header .nav ul li').index(this);
		// console.log(idx);
		pageNum = changePage(idx);
		// console.log(pageNum)
		// pageNum = idx;
	});
	$('.header .logo').click(function(){
		pageNum = changePage(0);
	})
	$('#sidebar p.arrow-up').click(function(){
		pageNum--;
		pageNum = changePage(pageNum)
	})
	$('#sidebar p.arrow-down').click(function(){
		pageNum++;
		pageNum = changePage(pageNum)
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
	});
	window.onresize = function(){
		pageNum = changePage(pageNum);
	}

		// $(window).on('resize',function(){
		// 	h=$(window).height();
		// 	pageNum = changePage(pageNum);
		// })
	pageNum = changePage(pageNum);
})()


	// 执行主函数页面切换效果；
	function changePage(num){
		var h = $(window).height();
		$(window).on('resize',function(){
			h=$(window).height();
		})
		// 判断执行值是否超过范围
		if(num < 1){
			$('#sidebar p.arrow-up').addClass('disabled');
			num = 0.5;
		}else {
			$('#sidebar p.arrow-up').removeClass('disabled');
		}
		// console.log($(".mainbox>div").size())
		if(num >= $(".mainbox>div").size() - 1){
			$('#sidebar p.arrow-down').addClass('disabled');
			num = Math.floor($(".mainbox>div").size() - 1)+0.5
		}else{
			$('#sidebar p.arrow-down').removeClass('disabled');
		}
		num = Math.floor(num)+0.5;
		// console.log(num)

		$('.header .nav ul li').eq(Math.floor(num)).addClass("checked").siblings().removeClass()
		// console.log(num)
		// console.log(- h * num);
		$("body").stop().animate({
			top: -h * Math.floor(num) 
		}, 200);
		$(".positionFixed").stop().animate({
			top: h * Math.floor(num)
		}, 200);
		return num;
	}