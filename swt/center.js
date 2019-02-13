

//中间弹窗
document.writeln('<style>');
document.writeln('#swt_center_box{position: fixed; left:0; top:0; width: 100vw;height:100vh;z-index:998;}');
document.writeln('#swt_center{position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);width: 65%;}');
document.writeln('#swt_center a{position: absolute; bottom: 0; display: block; width: 50%; height: 4.1em;}');
document.writeln('#swt_center a:nth-child(1){left:0}');
document.writeln('#swt_center a:nth-child(2){right:0}');
document.writeln('#swt_center a:nth-child(3){top: 0.7em; width: 100%; height: 10em;}');
document.writeln('#swt_center img{width:100%;}');
document.writeln('#btn_close{position: absolute; top: 0; right: 0; transform:translate(50%,-50%); width: 10%;}');
document.writeln('@media screen and (min-width: 640px) {#swt_center{width:20rem}}');

document.writeln('.box_fadeIn{animation:box_fade-in 1.5s; -webkit-animation:box_fade-in 1.5s}');
document.writeln('@-webkit-keyframes box_fade-in { 0% {opacity: 0;} 100% {opacity: 1;} }  ');
document.writeln('@keyframes box_fade-in { 0% {opacity: 0;} 100% {opacity: 1;}} ');

document.writeln('.box_fadeOut{animation:box_fade-out 1.5s; -webkit-animation:box_fade-out 1.5s}');
document.writeln('@-webkit-keyframes box_fade-out { 0% {opacity: 1;} 100% {opacity: 0;} }  ');
document.writeln('@keyframes box_fade-out { 0% {opacity: 1;} 100% {opacity: 0;}} ');

document.writeln('.box_closeEffect{animation:box_close 1.5s; -webkit-animation:box_close 1.5s}');
document.writeln('@keyframes box_close{	0%{width:100vw; height:100vh; top: 0;left: 0;} 100%{width: 0; height:0; top: 100%;left: 100%;}}');
document.writeln('.box_showEffect{animation:box_show 1.5s; -webkit-animation:box_show 1.5s}');
document.writeln('@keyframes box_show{	0%{width: 0; height: 0;top: 100%;left: 100%;} 100%{width:100vw; height:100vh;top: 0;left: 0;}}');

document.writeln('</style>');

document.writeln('<div id="swt_center_box" style="display:none">');
document.writeln('	<div id="swt_center">');
document.writeln('		<a href="tel:010-67611721" ></a>');
document.writeln('		<a href="javascript:void(0)" onclick="openZoosUrl(\'chatwin\');" ></a>');
document.writeln('		<a href="javascript:void(0)" onclick="openZoosUrl(\'chatwin\');" ></a>');
document.writeln('		<img src="/bjjqyy/swt/swt_center.png" />');
document.writeln('		<div id="btn_close">');
document.writeln('			<img src="/bjjqyy/swt/closeBtn_swt.png" />');
document.writeln('		</div>');
document.writeln('	</div>');
document.writeln('</div>');

var swt_center_box = document.getElementById('swt_center_box')
var btn_close = document.getElementById('btn_close');

//第一次弹窗
function firstLoading(){
	swt_center_box.style.display = 'block';
	swt_center_box.setAttribute('class','box_fadeIn');
	//document.addEventListener("touchmove", defaultEvent, { passive: false });
}

//关闭事件
btn_close.addEventListener('click',function(){
	
	//淡出
	swt_center_box.setAttribute('class','box_closeEffect');
	//淡出
	//swt_center_box.setAttribute('class','box_fadeOut');
	
	setTimeout(
		closeCenter,
		1400
	)
});

//隐藏弹窗
function closeCenter(){
	swt_center_box.style.display = 'none';
	//document.removeEventListener("touchmove", defaultEvent);
	
	//setTimeout(afterLoading,6000)
	setTimeout(afterLoading,6000)
}


//第二次之后弹窗
function afterLoading(){
	swt_center_box.style.display = 'block';
	swt_center_box.setAttribute('class','box_showEffect');
	//document.addEventListener("touchmove", defaultEvent, { passive: false });
}


//阻止默认事件
function defaultEvent(e) {
	e.preventDefault();
}



setTimeout(firstLoading,3000);
