// 关于我们页面de轮播图
var swiperNum = 0;
swiperNum =  aboutSwiper(0)
function aboutSwiper(num){
	if(num <= 0){
		num = 0;
	}else if(num>=2){
		num = 2;
	}
	// console.log(num)
	$('.about .aboutSwiperCtrl li').removeClass('checked');
	// console.log($('.about .aboutSwiperCtrl li').hasClass('checked').index())
	$('.about .aboutSwiperCtrl li').eq(num).addClass('checked');
	$('.about .aboutSwiper .bigContent').css('margin-left', -1 * num + '00%');
	return num;
}
// console.log($('.about .aboutSwiper .bigContent div').width())
$('.about .aboutSwiperCtrl li').mouseover(function(){
	// console.log($('.about .aboutSwiperCtrl li').index(this))
	swiperNum = aboutSwiper($(this).index());
})

$('.about .aboutSwiper .bigContent').bind( 'mousedown' ,function(e){
	// console.log(this)
	var e = e || window.event;
	var x1 = e.offsetX || e.pageX,x2;

	var that = this;
	$(this).bind('mousemove', function(e){
		// console.log(e);
		// console.log(e.offsetX);
		// console.log(e.pageX);
		e.preventDefault()

		// aboutSwiper($(this).index());
		// 
	})
	$(this).bind('mouseup',function(e){
		var e = e || window.event;
		x2 = e.offsetX || e.pageX;
		$(that).unbind('mousemove');
		console.log(swiperNum)
		if(x2 - x1 > 0){
			swiperNum = aboutSwiper(--swiperNum);
		}if(x1 - x2 > 0){
			swiperNum = aboutSwiper(++swiperNum);
		}
	})

	$(document).bind('mouseup',function(){
		$(that).unbind('mousemove');
		$(that).unbind('mouseup');
		$(this).unbind('mouseup');
	})
})