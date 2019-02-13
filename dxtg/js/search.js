function getDomainQuery(url) {   



    var d = [];   



    var st = url.indexOf('//', 1);   



    var _domain = url.substring(st + 1, url.length);   



    var et = _domain.indexOf('/', 1);   



    d.push(_domain.substring(1, et));   



    d.push(_domain.substring(et + 1, url.length));   



    return d   



}   



   



function route() {   



    var eg = [];  



	if(document.referrer.indexOf("baidu.com") != -1){



    eg.push(['baidu', 'word']);    



	}else if(document.referrer.indexOf("sogou.com") != -1){



    eg.push(['sogou', 'keyword']);   



	}else if(document.referrer.indexOf("so.com") != -1){



    eg.push(['so.com', 'q']);   



	}else if(document.referrer.indexOf("sm.cn") != -1){



    eg.push(['sm.cn', 'q']);   



	}



    var reff=document.referrer;



	reff=reff.replace(/\|/g,"&");



	reff=reff.replace(/#/g,"?");



	reff=reff.replace(/_/g,"=");



	reff=reff.replace("src","word");



	reff=reff.replace("?&","?");



    var dq = getDomainQuery(document.referrer);



    var keyword=null;   



    var grep=null;   



    var str=null; 



	



    for(var el in eg){   



        var s = eg[el];   



        var DandQ=String(s).split(","); //字符分割   



        if (dq[0].indexOf(DandQ[0])>0){   



            eval("grep=/"+DandQ[1]+"\=.*\&/i;");   



            str = dq[1].match(grep);   



			if(str != null){



            keyword = str.toString().split("=")[1].split("&")[0];   



            keyword = decodeURIComponent(keyword);  



			}else{



			keyword = "";



			}



            return keyword;   



        }else{



		keyword="";



		return keyword;



		}   



    } 







   



}   







var ref=document.location.href;



ref = ref.toLowerCase();



ref=ref.replace(/#/g,"%23");



ref=ref.replace(/:/g,"%3a");







var keyss=route();



function textv(){



if (typeof(keyss) != "undefined" && keyss != "") { 



//document.getElementById("keyw").value =keyss;



document.getElementById("skeyword").innerHTML =keyss;



document.getElementById("texteditor2").innerHTML ="点击咨询 "+"<font style='color:#f00'>"+keyss+"</font>";



}



}



setTimeout("textv()",10);