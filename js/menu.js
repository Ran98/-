/*
* @Author: admin
* @Date:   2018-10-15 15:21:19
* @Last Modified by:   冉郑伟
* @Last Modified time: 2018-10-16 20:07:22
*/
$(function(){
	var oo=true;
	$('#tog').click(function(event) {
		if(oo){
			$('.con2').stop().fadeIn(500)
			$(this).attr('src','../images/icon-close.svg')
			oo=false;
		}
		else{
			$('.con2').stop().fadeOut(500)
			$(this).attr('src','../images/icon-hamburger.svg')
			oo=true;
		}
	});

	var pre=[{
		"imgSrc":"../images/lemon-pistachio-cake.jpg",
		"txt":"柠檬开心果蛋糕"
	},
	{
		"imgSrc":"../images/moroccan-style-figs-salad.jpg",
		"txt":"摩洛哥风情无花果沙拉"
	},
	{
		"imgSrc":"../images/tuna-tomato-tart.jpg",
		"txt":"吞拿鱼番茄挞"
	},
	{
		"imgSrc":"../images/moroccan-style-figs-salad.jpg",
		"txt":"火鸡黑松露派"
	},
	{
		"imgSrc":"../images/white-chocolate-hazelnut-tart.jpg",
		"txt":"白巧克力榛果挞"
	},
	{
		"imgSrc":"../images/whole-bean-anniverary-blend.jpg",
		"txt":"秋日综合咖啡豆"
	},
	{
		"imgSrc":"../images/via-anniverary-blend.jpg",
		"txt":"秋日综合免煮咖啡"
	},
	{
		"imgSrc":"../images/origami-anniverary-blend.jpg",
		"txt":"秋日综合滴虑咖啡"
	},
	{
		"imgSrc":"../images/svc-1.jpg",
		"txt":"高雅庄园星礼卡"
	},
	{
		"imgSrc":"../images/msr-1.jpg",
		"txt":"一杯懂你的咖啡星享卡"
	},
	{
		"imgSrc":"../images/mer-1.jpg",
		"txt":"24oz 唯美女神双层塑料吸管杯"
	},
	{
		"imgSrc":"../images/mer-2.jpg",
		"txt":"12oz 星空系列美人鱼尾双层塑料随行杯"
	},
	{
		"imgSrc":"../images/mer-3.jpg",
		"txt":"12oz 复古美人鱼马克杯"
	},
	{
		"imgSrc":"../images/mer-4.jpg",
		"txt":"12oz 抽象鱼尾马克杯"
	},
	{
		"imgSrc":"../images/mer-5.jpg",
		"txt":"12oz 海中邂逅双层马克杯"
	},
	{
		"imgSrc":"../images/mer-6.jpg",
		"txt":"12oz 深海女神双层马克杯"
	},
	{
		"imgSrc":"../images/mer-7.jpg",
		"txt":"12oz 神秘鱼鳞双层马克杯"
	},
	{
		"imgSrc":"../images/mer-8.jpg",
		"txt":"12oz 女神之冠马克杯"
	},
	{
		"imgSrc":"../images/mer-9.jpg",
		"txt":"12oz 立体金边鱼鳞玻璃杯"
	},
	{
		"imgSrc":"../images/mer-10.jpg",
		"txt":"16oz 跃入大海双层抽真空不锈钢杯"
	},
	{
		"imgSrc":"../images/mer-11.jpg",
		"txt":"16oz 星空系列美人鱼不锈钢保温杯"
	},
	{
		"imgSrc":"../images/mer-12.jpg",
		"txt":"16oz 星空系列美人鱼尾不锈钢保温杯（含魔术贴杯套）"
	},
	{
		"imgSrc":"../images/mer-13.jpg",
		"txt":"12oz 鱼鳞不锈钢保温杯"
	},
	{
		"imgSrc":"../images/mer-14.jpg",
		"txt":"500ml 膳魔师女神保温杯"
	},
	{
		"imgSrc":"../images/mer-15.jpg",
		"txt":"10oz 鱼鳞浮雕马克杯"
	},
	{
		"imgSrc":"../images/mer-16.jpg",
		"txt":"14oz 鱼尾马克杯"
	},
	{
		"imgSrc":"../images/mer-17.jpg",
		"txt":"14oz 皇冠马克杯"
	},
	{
		"imgSrc":"../images/mer-18.jpg",
		"txt":"10oz 双层玫瑰金电镀玻璃杯"
	},
	{
		"imgSrc":"../images/mer-19.jpg",
		"txt":"12oz 珠光鱼鳞双层马克杯"
	},
	{
		"imgSrc":"../images/mer-20.jpg",
		"txt":"12oz 女神倒影双层马克杯"
	},
	{
		"imgSrc":"../images/mer-21.jpg",
		"txt":"12oz 双层玫瑰金王冠美人鱼马克杯"
	},
	{
		"imgSrc":"../images/mer-22.jpg",
		"txt":"8oz 珍珠贝壳糖罐"
	},
	{
		"imgSrc":"../images/mer-23.jpg",
		"txt":"8oz金点玫瑰马克杯（含搅拌棒）"
	},
	{
		"imgSrc":"../images/mer-24.jpg",
		"txt":"16oz 鱼鳞纹理不锈钢吸管杯"
	},
	{
		"imgSrc":"../images/mer-25.jpg",
		"txt":"400ml 膳魔师女神复古保温杯（含礼盒）"
	},
	{
		"imgSrc":"../images/mer-26.jpg",
		"txt":"8oz 咖啡旅程马克杯"
	},
	{
		"imgSrc":"../images/mer-27.jpg",
		"txt":"3oz 咖啡旅程品尝杯"
	},
	{
		"imgSrc":"../images/mer-28.jpg",
		"txt":"6oz 咖啡文化马克杯组"
	},
	{
		"imgSrc":"../images/mer-33.jpg",
		"txt":"12oz 双层玫瑰金锡箔玻璃杯"
	}
	]
	
	for(var i=0;i<pre.length;i++){
		var me=$('#cp li').eq(0).clone(true)
		me.children('img').attr('src',pre[i].imgSrc)
		me.children('p').html(pre[i].txt)
		$('#cp').append(me)
	}




})
