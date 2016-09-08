/**
 * Created by Administrator on 2016/9/1 0001.
 */
function login(){
    var login=document.getElementById("login");
   var show =document.getElementsByClassName("container")[0];
    var hide=document.getElementsByClassName("login")[0];
    var img=hide.getElementsByTagName("img")[0];
    login.onclick=function(){
        show.style.display="block";
        document.body.style.overflow="hidden";
    }
    img.onclick=function(){
        show.style.display="none";
        document.body.style.overflow="scroll";
    }
}