// JavaScript Document
document.writeln("<link href=\"/swt/css/style.css\" type=\"text/css\" rel=\"stylesheet\"/>");
document.writeln("<style>#LRfloater1{display:none}</style>" );
document.writeln("<div class=\"swtCenter relative\">");
document.writeln("    	<span class=\"closeBtn_swt absolute\"></span>");
document.writeln("    	<h3>���Ŷ�ͯ��������</h3>");
document.writeln("        <h4>һ���绰���������ǳ�</h4>");
document.writeln("        <div class=\"mfhd clearfix\">");
document.write('<input type="tel" style="width:143px;background:none;border:0px;" class="callbF_text" onclick="this.value = &#39;&#39;" onblur="if(value == &#39;&#39;){value=&#39;���������ĵ绰����&#39;}" value="���������ĵ绰����" name="telInput" id="telInput">');


document.writeln('<input type="button" class="submit" name="callBtn" id="callBtn" value="��ѻص�">')
document.writeln("            ");
document.writeln("        </div>");

document.writeln("        <p>");
document.writeln("            	�������ֻ���ֱ�����룬����ǰ�����š�");
document.writeln("Ϊ���ṩ���Ž������");
document.writeln("        </p>");
document.writeln("        <div class=\"swt_lists absolute\">");
document.writeln("        	<a href=\"http://dut.zoosnet.net/LR/Chatpre.aspx?id=DUT51071603&lng=cn\" class=\"swt_list1\"  class=\"swt_list1\"><i class=\"swtCallIcon\"></i><em>��ϵ����</em></a>");
document.writeln("            <a href=\"http://dut.zoosnet.net/LR/Chatpre.aspx?id=DUT51071603&lng=cn\" class=\"swt_list2\" ><i class=\"swtLinkCounter\" id=\"swtLinkCounter\">6</i><i class=\"swtLinkIcon\"></i><em>������ѯ</em></a>");
document.writeln("        </div>");

document.writeln("    </div>");


document.getElementById("callBtn").onclick = function () { 
lxb.call(document.getElementById("telInput"));
};
document.write('<script type="text/javascript"  data-lxb-uid="1839424" data-lxb-gid="190913" src="http://lxbjs.baidu.com/api/asset/api.js?t=' + new Date().getTime() + '" charset="utf-8"></scr' + 'ipt>' );

document.writeln("    <script language=\"javascript\" src=\"https://awt.zoosnet.net/JS/LsJS.aspx?siteid=AWT72922747&float=1&lng=cn\"></script>");

//�м䵯��
setTimeout(openMswt,1000);
var footerHeight = $(".footer");
var bTrue = false;
function _footerHeight(){
	return footerHeight.height();
};
$(window).resize(function(){
	_footerHeight();
	if(bTrue){
		footerHeight.css({bottom:-_footerHeight()+'px'})
	}else {
		footerHeight.css({bottom:0+'px'})
	}
});
function openMswt(){
	$(".swtCenter").fadeIn(600,function(){			
	footerHeight.stop().animate({bottom:-_footerHeight()+'px'},400,function(){$(this).show();bTrue = true;});})			
}
function closeSwt(){
	$(".swtCenter").fadeOut(600,function(){			
	footerHeight.show().stop().animate({bottom:0+'px'},400,function(){bTrue = false;});}).delay(5000).fadeIn(function(){openMswt();})	
}
$(function(){
	//document.getElementById("swtIcon_Counter").innerHTML=num;
	//document.getElementById("swtLinkCounter").innerHTML=num;
	footerHeight.show();
	$(".closeBtn_swt").on("click",function(){
		//console.log("11");
		closeSwt();
	})
})