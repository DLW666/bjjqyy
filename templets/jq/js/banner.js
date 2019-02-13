

document.writeln("<div class=\'banner\' id=\'banner\'>");
document.writeln("    <ul>");
document.writeln("        <li>");
document.writeln("            <a href=\'http://dut.zoosnet.net/LR/Chatpre.aspx?id=DUT51071603\'>");
document.writeln("            	<img src=\'/bjjqyy/templets/jq/images/banner1.jpg\'>");
document.writeln("            </a>");
document.writeln("        </li>");
document.writeln("        <li>");
document.writeln("            <a href=\'/bjjqyy/a/zmzj/ljj/zjwz/117.html\'>");
document.writeln("            	<img src=\'/bjjqyy/templets/jq/images/banner2.jpg\'>");
document.writeln("            </a>");
document.writeln("        </li>");
document.writeln("        <li>");
document.writeln("            <a href=\'/bjjqyy/a/sppg/123.html\'>");
document.writeln("            	<img src=\'/bjjqyy/templets/jq/images/banner3.jpg\'>");
document.writeln("            </a>");
document.writeln("        </li>");
document.writeln("    </ul>");
document.writeln("</div>");

TouchSlide({ 
	slideCell:"#banner",
	//titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	mainCell:"#banner ul", 
	effect:"leftLoop", 
	//autoPage:true,//自动分页
	autoPlay:true, //自动播放
	interTime:5000
});
