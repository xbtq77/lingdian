/**
 * Created by Administrator on 2016/8/31 0031.
 */
window.onload=function(){
    var scroll=document.getElementById("js_scroll");
    var ul=scroll.getElementsByTagName("ul")[0];
    login();

   /* console.log(window.getComputedStyle(ul,null)[left]);*/
    var imgs=ul.getElementsByTagName("img");
    var len=imgs.length;
    var scroll_ctrl=document.getElementById("scroll-ctrl");
    var prev=document.getElementById("scroll-ctrl-prev");
    var next=document.getElementById("scroll-ctrl-next");
    ul.appendChild(ul.children[0].cloneNode(true));
    for(var i=0;i<imgs.length-1;i++){
        var span=document.createElement("span");
        span.className="scroll-ctrl-con";
        scroll_ctrl.appendChild(span);
    }
    var spans=scroll_ctrl.getElementsByTagName("span");
    var isNow=0;
    var key=0;
    for(var j=0;j<spans.length;j++){
        spans[j].index=j;
        spans[j].onmousemove=function(){
            var wid=document.body.clientWidth;
                isNow=this.index;
                key=this.index;
            animate(ul,{left:-isNow*wid});
            setQuence(key)
        }
    }

    console.log(len)
    spans[isNow].className="scroll-ctrl-con current";
    var timer=setInterval(autoPlay,2000);
    function autoPlay(){
        var wid=document.body.clientWidth;
        isNow++;
        key++;
        //len最大是4，当isnow等于5时，此时应该在第二张图片上了
        if(isNow>len){
            ul.style.left=0;
            isNow=1;

        }
        animate(ul,{left:-isNow*wid});
        if(key>spans.length-1){
            key=0
        }
        setQuence(key);
    }
    function setQuence(key){
        for(var i=0;i<len;i++){
            spans[i].className="scroll-ctrl-con";
        }
        spans[key].className="scroll-ctrl-con current";
    }
    scroll.onmousemove=function(){
        clearInterval(timer);
        prev.style.display="block";
        next.style.display="block";
    }
    scroll.onmouseout=function(){
        timer=setInterval(autoPlay,2000);
        prev.style.display="none";
        next.style.display="none";
    }
    prev.onclick=function(){
        var wid=document.body.clientWidth;
        if(isNow<1 || isNow==len ){
            isNow=0;
            key=0;
            ul.style.left=0;


        }
        else {
            isNow--;
            key--
        }
        animate(ul,{left:-isNow*wid});
        setQuence(key);

    }
    next.onclick=function(){
        var wid=document.body.clientWidth;
        if(isNow==len){
            isNow=0;
            key=0;
            ul.style.left=0;
        }
        if(isNow<len-1 ) {
            isNow++;
            key++;
            animate(ul, {left: -isNow * wid});
            setQuence(key);
        }
    }
    var returnTop=document.getElementsByClassName("returnTop")[0]
        .getElementsByTagName("img")[0];
    function show(obj){
        obj.style.display="block";
    }
    function hide(obj){
        obj.style.display="none"
    }
    //返回顶部
    var nav=document.getElementById("nav");
    window.onscroll=function(){
        //是否显示返回顶部图标
        scrollTop().top>40?show(returnTop):hide(returnTop);

        //具体顶部40px时，导航栏变成固定定位
        if(scrollTop().top>40){
            nav.style.position="fixed";
            nav.style.top=0;
            nav.style.opacity=0.8;
        }else{
            nav.style.position="";
            nav.style.opacity="1";
        }
    }
    returnTop.onclick=function(){
        var target=0;
        var top=scrollTop().top;
        console.log(top);
        var timer1=setInterval(function(){
            top=top+top>0?Math.ceil((target-top)/10):Math.floor((target-top)/10);

            window.scrollTo(target,top);
            if(top==target){
                clearInterval(timer1);
            }
        },200);



    }

    //登陆弹出框


}
