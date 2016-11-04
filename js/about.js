(function(){
	// 轮播图关于我们页面
	var flg1 = true;
	var swiperNum = 0;
	function aboutSwiper(num){
		// console.log(num)
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
	function autoSwiper (num) {
		setTimeout(function() {
			// console.log(flg1)
			if(flg1){
				num++;
				if(num<0){
					num = 3;
				}else if(num > 2){
					num = -1;
				}
				swiperNum = aboutSwiper(num);
			}
			autoSwiper(swiperNum);
		}, 4000);
	};
	// console.log($('.about .aboutSwiper .bigContent div').width())
	$('.about .aboutSwiperCtrl li').hover(function(){
		// console.log($('.about .aboutSwiperCtrl li').index(this))
		swiperNum = aboutSwiper($(this).index());
	});
	$('.about .aboutSwiper .bigContent>div,.about .aboutSwiperCtrl li').hover(function(){
		flg1 = false;
	},function(){
		flg1 = true;
	})

	$('.about .aboutSwiper .bigContent').bind( 'mousedown' ,function(e){
		// console.log(this)
		var e = e || window.event;
		var x1 = e.offsetX || e.pageX,x2,x3,x4;

		var that = this;
		$(document).bind('mousemove', function(e){
			// console.log(e);
			// console.log(e.offsetX);
			// console.log(e.pageX);
			var e = e || window.event;
			var x3 = e.offsetX || e.pageX;
			if(e.preventDefault){
				e.preventDefault();
			}else{
				window.event.returnValue = false;
			}
			// var num= parseInt( $('#sampleDiv').css('marginLeft') );
			$('.about .aboutSwiper .bigContent').css('marginLeft', parseInt($('.about .aboutSwiper .bigContent').css('marginLeft')) + (x3 - x1) * 0.5 + 'px')
			// console.log(parseInt($('.about .aboutSwiper .bigContent').css('marginLeft')) + x3 - x1 + 'px')


			// aboutSwiper($(this).index());
			// 
		})
		$(document).bind('mouseup',function(e){  //	此处对全局写事件，
			var e = e || window.event;
			x2 = e.offsetX || e.pageX;
			$(that).unbind('mousemove');
			// console.log(swiperNum)
			if(x2 - x1 > 100){
				swiperNum = aboutSwiper(--swiperNum);
			}else if(x1 - x2 > 100){
				swiperNum = aboutSwiper(++swiperNum);
			}else{
				swiperNum = aboutSwiper(swiperNum);
			}
		})

		$(document).bind('mouseup',function(){
			$(this).unbind('mousemove');
			$(that).unbind('mousemove');
			$(that).unbind('mouseup');
			$(this).unbind('mouseup');
		})
	})
	swiperNum =  aboutSwiper(0);
	autoSwiper(swiperNum);
})()
