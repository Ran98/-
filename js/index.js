/*
* @Author: admin
* @Date:   2018-09-29 10:59:28
* @Last Modified by:   admin
* @Last Modified time: 2018-10-15 10:55:19
*/
$(function(){
	var oo=true;
	$('#tog').click(function(event) {
		if(oo){
			$('.con2').stop().fadeIn(500)
			$(this).attr('src','images/icon-close.svg')
			oo=false;
		}
		else{
			$('.con2').stop().fadeOut(500)
			$(this).attr('src','images/icon-hamburger.svg')
			oo=true;
		}
	});
	//k2
	$('.k2 ul li img').hover(function() {
		$(this).css({'transform':'translateY(-3px)', 'box-shadow': '0 1px 1px 2px rgba(0, 0, 0, 0.12)'})
	}, function() {
		$(this).css({'transform':'translateY(3px)', 'box-shadow': '0 1px 1px 1px rgba(0, 0, 0, 0.12)'})
	});
	//k4 ul li a
	$('.k4 ul li a').hover(function() {
		$(this).css({'transform':'translateY(-3px)', 'box-shadow': '0 1px 1px 2px rgba(0, 0, 0, 0.12)'})
	}, function() {
		$(this).css({'transform':'translateY(3px)', 'box-shadow': '0 1px 1px 1px rgba(0, 0, 0, 0.12)'})
	});
	//k5 ul li
	$('.k5 ul li').hover(function() {
		$(this).css({'transform':'translateY(-3px)', 'box-shadow': '0 1px 1px 2px rgba(0, 0, 0, 0.12)'})
	}, function() {
		$(this).css({'transform':'translateY(3px)', 'box-shadow': '0 1px 1px 1px rgba(0, 0, 0, 0.12)'})
	});
	//nav 设置高度
	// var h=$(window).height()
	// 	$('nav').css('height',h+'px')
	// $(window).resize(function(event) {
	// 	var h=$(window).height()
	// 	$('nav').css('height',h+'px')
	// });
	// $(window).scroll(function(event) {
	// 	$('nav').css('top',$(window).scrollTop())
	// });

	//.bottom
	$('.bottom ul li').eq(0).children().children().children().eq(1).show().siblings().hide()
	$('.bottom ul li ').click(function() {
		$('.bottom img').show()
		$('.active').hide()
		$(this).children().children().children('img').hide()
		$(this).find('.active').show()
		// $(this).siblings().children().children().find('.active').hide()
		})
	// }, function() {
	// 	$(this).removeClass('active').siblings().hide()
	// });
	
	


















	
})