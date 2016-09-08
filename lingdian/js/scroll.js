 function scrollTop(){
        //ie
        if(window.pageYOffset!=null){
                return {top:window.pageYOffset,
                left:pageXOffset};
        }
        //不是怪异模式
       else  if(document.compatMode=="CSS1Compat"){
            return{
                top:document.documentElement.scrollTop,
                left:document.documentElement.scrollLeft
            }

        }
        else{
            return{
                top:document.body.scrollTop,
                left:document.body.scrollLeft
            }
        }


}
