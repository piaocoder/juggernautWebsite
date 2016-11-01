var current = 0; //current变量监听
var finish = true;
var SIZE = $(".mainbox>div").size();
var h = $(window).height();
$(document).on("mousewheel DOMMouseScroll", function(e) {
	var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
		(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
		console.log(current)
	if(delta > 0) {
		current -= 0.08;
		if(current < 0) {
			current = 0;
		}
		$(".nav li").eq(Math.floor(current)).addClass("checked").siblings().removeClass()
		$("body").stop().animate({
			top: -h * Math.floor(current)
		}, 500)

	} else if(delta < 0) {
		// 向下滚
		current += 0.08;
		$(".nav li").eq(Math.ceil(current)).addClass("checked").siblings().removeClass()
		$("body").stop().animate({
			top: -h * Math.ceil(current)
		}, 300)
		if(current >= SIZE-1) {
			current = SIZE-0.8 ;
			$("body").stop().animate({
			top: -h * Math.ceil(current-1)
		}, 300)
		}
	}


});
	function move() {
		//滚动函数
		$("body").stop().animate({
			top: -h * current
		}, 300)
	}
$(".nav li").click(function() {
	current = $(this).index()
	$(this).addClass("checked").siblings().removeClass()
	move()
})
