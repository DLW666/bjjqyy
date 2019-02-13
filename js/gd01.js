// JavaScript Document
var speed=45
var demo0=document.getElementById("demo0"); 
var demo2=document.getElementById("demo2"); 
var demo1=document.getElementById("demo1"); 
demo2.innerHTML=demo1.innerHTML
function Marquee0(){
if(demo1.scrollHeight<=demo0.scrollTop)
demo0.scrollTop=0
else{
demo0.scrollTop++
}
}
var MyMar0=setInterval(Marquee0,speed)
demo0.onmouseover=function() {clearInterval(MyMar0)}
demo0.onmouseout=function() {MyMar0=setInterval(Marquee0,speed)}