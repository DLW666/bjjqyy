// JavaScript Document

function browserRedirect() { 
var sUserAgent= navigator.userAgent.toLowerCase(); 
var bIsIpad= sUserAgent.match(/ipad/i) == "ipad"; 
var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os"; 
var bIsMidp= sUserAgent.match(/midp/i) == "midp"; 
var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"; 
var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb"; 
var bIsAndroid= sUserAgent.match(/android/i) == "android"; 
var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce"; 
var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile"; 
 
if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) { 



//

document.write('<style type="text/css">');
document.write('.wq_swtx{position: fixed; left: 0;top:180px;z-index: 999;_position:absolute;_bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));}');
document.write('.wq_tzswtx{position: fixed; left: 50%;margin-left: -120px !important;margin-top:-60px !important;top: 50%;z-index: 999; display:none;_position:absolute;_bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));}'
);
document.write('#wq_swt_xhx{ background:url(img/7.gif) no-repeat;}');
document.write('.swt_xhx{ position: absolute; right:10px; width:20px; height:20px; cursor:pointer; top:0;}');
document.write('#LRdiv1,#LRdiv0{ display:none !important;}');
document.write('</style>');
document.write('<div class="wq_swtx">');
document.write('<a style="position: absolute; right:0px; width:12px; height:20px; cursor:pointer; top:0;" id="wq_swt_xhx"></a>');
document.write('<a  href="javascript:void(0)" onclick="openZoosUrl();LR_HideInvite();return false;"  target="_blank"><img src="img/sjswtleft.png" width="40" height="100" usemap="#Map222" border="0"> <map name="Map222" id="Map222"><area shape="rect" coords="3,3,25,98" onclick="openZoosUrl();LR_HideInvite();;return false;" /><area shape="rect" coords="5,100,26,197" href="http://dut.zoosnet.net/LR/Chatpre.aspx?id=DUT51071603&lng=cn" target="_blank" /></map></a>');
document.write('</div>');

document.write('<link rel="stylesheet" type="text/css" href="js/swt/swt.css"/>');
document.write('<script type="text/javascript" src="js/swt/swtxin.js" charset="gb2312"></></script>');





//





  
  
  
 



} else { 
//

/*document.write('<style type="text/css">');
document.write('.wq_swtx{position: fixed; left: 0;top:180px;z-index: 999;_position:absolute;_bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));}');
document.write('.wq_tzswtx{position: fixed; left: 50%;margin-left: -235px;margin-top:-181px;top: 50%;z-index: 999; display:none;_position:absolute;_bottom:auto;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));}');
document.write('#wq_swt_xhx{ background:url(img/7.gif) no-repeat;}');
document.write('.swt_xhx{ position: absolute; right:10px; width:20px; height:20px; cursor:pointer; top:0;}');
document.write('#LRdiv1,#LRdiv0{ display:none !important;}');
document.write('</style>');
document.write('<div class="wq_swtx">');
document.write('<a style="position: absolute; right:0px; width:12px; height:20px; cursor:pointer; top:0;" id="wq_swt_xhx"></a>');
document.write('<a href="javascript:void(0)" onclick="openZoosUrl();LR_HideInvite();return false;" target="_blank"><img src="img/swtleft.gif" width="120" height="119" usemap="#Map222" border="0"> <map name="Map222" id="Map222"><area shape="rect" coords="3,3,25,98" onclick="openZoosUrl();LR_HideInvite();;return false;" /><area shape="rect" coords="5,100,26,197" href="javascript:void(0)" onclick="openZoosUrl();LR_HideInvite();return false;" target="_blank" /></map></a>');
document.write('</div>');
document.write('<div class="wq_tzswtx"> <a style="position: absolute; right:0px; width:60px; height:50px; cursor:pointer; top:0;" class="swt_xhx"></a> <a href="javascript:void(0)" onclick="openZoosUrl();LR_HideInvite();return false;" target="_blank"><img src="img/swtzj.jpg" width="530" height="309"  usemap="#Map9" border="0"></a></div>');
$(function(){
	var timer01=null;
	var timer02=null;
	function swt_show(){
		$(".wq_tzswtx").css("display","block");
		$(".wq_swtx").css("display","none");
	}
	window.onload=function(){
		$(".wq_tzswtx").fadeIn(1500);
		$(".wq_swtx").fadeOut(1500)
		}
	timer01=setTimeout(swt_show, 15000);
	$(".swt_xhx").click(function(){
		if(timer01){
			clearTimeout(timer01)
		}
		if(timer02){
			clearTimeout(timer02)
		}
			$(".wq_tzswtx").fadeOut(1500);
			$(".wq_swtx").fadeIn(1500);
			timer02=setTimeout(swt_show,15000);
		})
	$("#wq_swt_xhx").click(function(){
			$(".wq_swtx").fadeOut(1500);
			$(".wq_tzswtx").fadeIn(1500);
		})	
	})
document.write('</script>');



*/


//




  
  
  
  



} 
} 
browserRedirect(); 










