

document.writeln('<style>');
document.writeln('	#swt_icon{position: fixed;left: 1%;top: 40%;width: 2.3rem;z-index:1100}');
document.writeln('	#swt_icon img{width:100%}');
document.writeln('	#close_icon{ width: 0.8em; position: absolute; top:0; right:0; transform: translate(50%,-50%);}');
document.writeln('	#swt_yao{position: fixed;right: 1%;top: 50%;width: 2rem;transform: translate(0,-50%);z-index:1100}');
document.writeln('	#swt_yao img{width:100%}');
document.writeln('</style>');

//左侧悬浮
document.writeln('<div id="swt_icon" style="display:block;">');
document.writeln('	<a href="javascript:void(0)" onclick="openZoosUrl(\'chatwin\');">')
document.writeln('		<img src="/bjjqyy/swt/mobileonline.gif" />');
document.writeln('	</a>')
document.writeln('	<div id="close_icon">');
document.writeln('		<img src="/bjjqyy/swt/x.png" />');
document.writeln('	</div>');
document.writeln('</div>');

//右侧悬浮
document.writeln('<div id="swt_yao" style="display:block;">');
document.writeln('	<img src="/bjjqyy/swt/yao.gif" />');
document.writeln('</div>');

//左侧悬浮
document.getElementById('close_icon').addEventListener('click',function(){
	document.getElementById('swt_icon').style.display = 'none';
	setTimeout(showLeft,10000);
});
function showLeft(){
	document.getElementById('swt_icon').style.display = 'block';
}

//滑动块
function drag(){
	var div1 = document.querySelector('#swt_icon');
	//限制最大宽高，不让滑块出去
	var maxW = document.documentElement.clientWidth - div1.clientWidth;
	var maxH = document.documentElement.clientHeight - div1.clientHeight;
	//console.log(div1)
	
	//手指触摸开始，记录div的初始位置
	div1.addEventListener('touchstart', function(e) {
		var ev = e || window.event;
		var touch = ev.targetTouches[0];
		oL = touch.clientX - div1.offsetLeft;
		oT = touch.clientY - div1.offsetTop;
		document.addEventListener("touchmove", defaultEvent, { passive: false });
	});
	
	//触摸中的，位置记录
	div1.addEventListener('touchmove', function(e) {
		var ev = e || window.event;
		var touch = ev.targetTouches[0];
		var oLeft = touch.clientX - oL;
		var oTop = touch.clientY - oT;
		if(oLeft < 0) {
			oLeft = 0;
		} else if(oLeft >= maxW) {
			oLeft = maxW;
		}
		if(oTop < 0) {
			oTop = 0;
		} else if(oTop >= maxH) {
			oTop = maxH;
		}
		div1.style.left = oLeft + 'px';
		div1.style.top = oTop + 'px';
	});
	
	//触摸结束时的处理
	div1.addEventListener('touchend', function() {
		document.removeEventListener("touchmove", defaultEvent);
	});
	
	//阻止默认事件
	function defaultEvent(e) {
		e.preventDefault();
	}
	
}
	
//drag()
