!function(){
	var  i=0;
	var timer;
	var slideSize=$(".product ul>li").size();
	function autoplay(){
		timer=setInterval(function(){
			$(".next").click()
		},5000);
	}
	autoplay()
	function clear(){
		clearInterval(timer)
	}
	$(".product ul").hover(function(){clear()},function(){autoplay()})
	$(".next").click(function(){
		i++;
		if(i>=slideSize)i=0;
		$(".product ul>li").eq(i).css("opacity",1).siblings().css("opacity",0)
		$(".product ul>li").eq(i).find("h3,.product-show img").addClass("slide-active").end().siblings().find("h3,.product-show img").removeClass("slide-active")
	})
		$(".prev").click(function(){
		i--;
		if(i<=0)i=slideSize;
		$(".product ul>li").eq(i).css("opacity",1).siblings().css("opacity",0)
		$(".product ul>li").eq(i).find("h3,.product-show img").addClass("slide-active").end().siblings().find("h3,.product-show img").removeClass("slide-active")
	})
	$(".next").click()
}()

