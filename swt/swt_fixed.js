

document.writeln("<style>#showWX{display:none; position: fixed;bottom: 0;transform: translate(0,-55%);padding:0;width:7rem;}@media screen and (min-width: 640px) {#showWX{transform: translate(0px, -100px);}}</style>");

document.writeln("<div class=\'topFixed\'>");
document.writeln("    <a href=\'tel:010-67611721\'><img src=\'/bjjqyy/templets/jq/images/top.jpg\'></a>");
document.writeln("</div>");
document.writeln("<div class=\'bottomFixed\'>");
document.writeln("    <div>");
document.writeln("        <a href='javascript:void(0)' onclick='openZoosUrl(\"chatwin\");'>");
document.writeln("            <img src=\'/bjjqyy/templets/jq/images/bottom_zx.png\'>");
document.writeln("            在线咨询");
document.writeln("        </a>");
document.writeln("    </div>");
document.writeln("    <img src=\'/bjjqyy/templets/jq/images/bottom_shu.png\' class=\'bottom_shu\'>");
document.writeln("    <div>");
document.writeln("        <a href='javascript:void(0)' onclick='openZoosUrl(\"chatwin\");'>");
document.writeln("            <img src=\'/bjjqyy/templets/jq/images/bottom_gh.png\'>");
document.writeln("            预约挂号");
document.writeln("        </a>");
document.writeln("    </div>");
document.writeln("    <img src=\'/bjjqyy/templets/jq/images/bottom_shu.png\' class=\'bottom_shu\'>");
document.writeln("    <div>");

//document.writeln("        <a onclick='copy()'>");
//document.writeln("            <img src=\'/bjjqyy/templets/jq/images/bottom_wx.png\'>");
//document.writeln("            微信咨询");
//document.writeln("        </a>");

document.writeln("        <a onclick='copy()' style='display: flex;align-items: center;justify-content: space-around;'>");
document.writeln("            <img src=\'/bjjqyy/templets/jq/images/bottom_wx.png\' style='margin: 0;'>");
document.writeln("            <div style='width: 70%;text-align: start;'>");
document.writeln("            	<p style='font-size: 0.9rem;margin-bottom: 0.2rem;'>微信咨询</p>");
document.writeln("				<p style='font-size: 0.8rem;'>18610949655</p>");
document.writeln("            </div>");	
document.writeln("        </a>");
	
document.writeln("    </div>");
document.writeln("	  <div id='showWX'>");
document.writeln("		<img style='width:100%' src='/bjjqyy/templets/jq/images/wx.jpg' />");
document.writeln("		<img onclick='hideWX()' style='width: 15%; position: absolute; top: 0; right: 0; transform: translate(50%,-50%);' src='/swt/x.png' />");
document.writeln("	  </div>");
document.writeln("		<textarea id='biao1' style='position:absolute;bottom:0;left:0;transform:translate(0,100%);' >jinqiaojiuyi</textarea>");
document.writeln("</div>");

//弹微信
//var wxEle = document.getElementById('showWX');
//function showWX(){
//	wxEle.style.display = 'block';				
//}
//function hideWX(){
//	wxEle.style.display = 'none';	
//}

//点击复制微信号
function copy(){
	var u = navigator.userAgent;
	//if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){//ios终端
		
	//}
	
	var Url2=document.getElementById("biao1");
	Url2.select(); // 选择对象
	document.execCommand("Copy"); // 执行浏览器复制命令
	alert("已复制金桥医院微信号，请前往微信添加");
	//window.location.href = '';
}




