

document.writeln("<style>.ks_ol_comm_div{ display:none !important;}#k_s_ol_miniWinSm{ display:none !important;}#k_s_ol_chatWinSm{ display:none !important;}#k_s_ol_chatWin{ display:none !important;}#k_s_ol_inviteWin{ display:none !important;}#k_s_ol_floatWin{ display:none !important;}#ks_ol_swfDivid{ display:none !important;}#ks_ol_chatWin{ display:none !important;}#_ks_ol_inviteWin{ display:none !important;}#ks_ol_floatWin{ display:none !important;}</style>");



/*头部*/



document.writeln("<style>");



document.writeln(".top_zx{ position:fixed;top:-4.5rem;left:0;width:100%;height:4.5rem;background:#000; opacity:0.8; z-index:456; transition:all 0.5s;}");



document.writeln(".top_zx1{top:0; transform:translateX(90deg);}");



document.writeln(".top_zxa{float:left; width:14%; padding:0 1%; height:4.5rem; text-align:center; border-right:1px solid #D6D6D6;}");



document.writeln(".top_zxa img{ width:3.5rem; height:3.5rem; border-radius:0.5rem; margin:0.5rem 0;}");



document.writeln(".top_zxb{float:left; width:80%; height:3.2rem; margin:0.6rem 0 0.6rem 2%;}");



document.writeln(".top_zxb h2{color:#fff; font-size:1.3rem; line-height:1.8rem;}");



document.writeln(".top_zxb h2 span{font-size:1rem; color:#d4d4d4; margin-left:1rem;}");



document.writeln(".top_zxb p{ font-size:1.2rem; color:#fff; line-height:1.4rem;}");



document.writeln("</style>");







setTimeout(function () {



$("#top_zx").toggleClass("top_zx1");



setTimeout("top_zx_hidd()",10000);



 }, 1000);







function top_zx_hidd(){



$("#top_zx").toggleClass("top_zx1");



setTimeout("top_zx_show()",20000);



};







function top_zx_show(){



$("#top_zx").toggleClass("top_zx1");



setTimeout("top_zx_hidd()",5000);



};







document.writeln("<div class=\"top_zx\" id=\"top_zx\"><a href=\"http://dut.zoosnet.net/LR/Chatpre.aspx?id=DUT51071603&lng=cn\">");



document.writeln("<div class=\"top_zxa\"><img src=\"images/qqIcon.gif\" /></div>");



document.writeln("<div class=\"top_zxb\"><h2>专家会诊需提前预约</h2><p>5位患者会诊1次……</p></div>");



document.writeln("</a></div>");











/*左侧漂浮*/



document.writeln('<style>.hot_right { width: 50px; position: fixed; left: -50px; top: 16%; z-index: 9999; opacity: 0; animation: swing 1s 1s ease both; transition: all 1s ease-in-out; opacity: 0; }.hot_right img { width: 50px; }.hot_right .hot_close { display: block; width: 16px; height: 16px; position: absolute; left: 8px; top: 55.5px; }.hot_right.animate { left: 0; opacity: 1; }.hot_right.animate1 { animation: tops 15s infinite; -webkit-animation: tops 15s infinite;-moz-animation: tops 15s infinite; -o-animation: tops 15s infinite; } @-webkit-keyframes swing { 0% {-webkit-transform:translateX(0%);}15% {-webkit-transform:translateX(-2%) rotate(-2deg);}30% {-webkit-transform:translateX(2%) rotate(2deg);}45% {-webkit-transform:translateX(-2%) rotate(-2deg);}60% {-webkit-transform:translateX(2%) rotate(2deg);}75% {-webkit-transform:translateX(-2%) rotate(-2deg);}100% {-webkit-transform:translateX(0%);}}@-webkit-keyframes sc { 0% {-webkit-transform:scale(1);top:45%;left:50%}100% {-webkit-transform:scale(0);top:105%;left:15%}}@-webkit-keyframes cs { 0% {-webkit-transform:scale(0);top:105%;left:15%}100% {-webkit-transform:scale(1);top:45%;left:50%}}@-webkit-keyframes swing { 0% {-webkit-transform:translateX(0%);}15% {-webkit-transform:translateX(-2%) rotate(-2deg);}30% {-webkit-transform:translateX(2%) rotate(2deg);}45% {-webkit-transform:translateX(-2%) rotate(-2deg);}60% {-webkit-transform:translateX(2%) rotate(2deg);}75% {-webkit-transform:translateX(-2%) rotate(-2deg);}100% {-webkit-transform:translateX(0%);}}@-moz-keyframes swing { 0% {-webkit-transform:translateX(0%);}15% {-webkit-transform:translateX(-2%) rotate(-2deg);}30% {-webkit-transform:translateX(2%) rotate(2deg);}45% {-webkit-transform:translateX(-2%) rotate(-2deg);}60% {-webkit-transform:translateX(2%) rotate(2deg);}75% {-webkit-transform:translateX(-2%) rotate(-2deg);}100% {-webkit-transform:translateX(0%);}}@-ms-keyframes swing { 0% {-webkit-transform:translateX(0%);}15% {-webkit-transform:translateX(-2%) rotate(-2deg);}30% {-webkit-transform:translateX(2%) rotate(2deg);}45% {-webkit-transform:translateX(-2%) rotate(-2deg);}60% {-webkit-transform:translateX(2%) rotate(2deg);}75% {-webkit-transform:translateX(-2%) rotate(-2deg);}100% {-webkit-transform:translateX(0%);}}@-o-keyframes swing { 0% {-webkit-transform:translateX(0%);}15% {-webkit-transform:translateX(-2%) rotate(-2deg);}30% {-webkit-transform:translateX(2%) rotate(2deg);}45% {-webkit-transform:translateX(-2%) rotate(-2deg);}60% {-webkit-transform:translateX(2%) rotate(2deg);}75% {-webkit-transform:translateX(-2%) rotate(-2deg);}100% {-webkit-transform:translateX(0%);}}@-webkit-keyframes tops { 0% {top:16%;}50% {top:50%;}100% {top:16%;}}@-moz-keyframes tops { 0% {top:16%;}50% {top:50%;}100% {top:16%;}} @-ms-keyframes tops { 0% {top:16%;}50% {top:50%;}100% {top:16%;}} @-o-keyframes tops { 0% {top:16%;}50% {top:50%;}100% {top:16%;}}</style>');



document.writeln('<div class="hot_right"><a href="tel:010-67611721"><img src="images/yxf.png"></a></div>');











$(function() {



    function hot_start(){



           $(".hot_right").addClass('animate');



           setTimeout(function(){



                $(".hot_right").addClass('animate1');



            },3000);



    }







    setTimeout(hot_start, 5000);



})




document.writeln("<style>");

document.writeln(".right_pf{ position:fixed; right:0; top:45%; width:5rem; z-index:98;}");

document.writeln(".right_pf img{ width:100%;}");

document.writeln("</style>");

document.writeln("<div class=\"right_pf\"><a href=\"/\"><img src=\"images/fhsy.png\" /></a></div>");

