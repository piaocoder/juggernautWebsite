var current = 0;
var SIZE = $(".main>div").size();
var h = $(window).height();
$(window).on('resize',function(){
	h=$(window).height();
})
$(document).on("mousewheel DOMMouseScroll", function(e) {
	var bol = true;
	var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
		(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
	if(delta > 0) {
		current -= 0.1;

		if(current <= 0) {
			current = 0;
		}
		$("body").stop().animate({
			top: -h * Math.floor(current)
		}, 200)
	} else if(delta < 0) {
		// 向下滚
		current += 0.1;
		if(current >= SIZE-1) {
			current = SIZE-1;
				
		}
		$("body").stop().animate({
			top: -h * Math.ceil(current)
		}, 200)
	}
});