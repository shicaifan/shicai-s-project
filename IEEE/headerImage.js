var imgs= ['Banff1.jpg','Banff2.jpg','Banff3.jpg', 'Banff4.jpg','Banff5.jpg','Banff6.jpg','Banff7.jpg','Banff8.jpg'];
			var i = 0;
			var header = document.getElementById("header");		
			header.style.backgroundImage= "url(images/Banff8.jpg)";
			header.style.backgroundSize="100% 100%";
			header.style.backgroundRepeat="no-repeat";
			function imgchange(){
				
				if(i>imgs.length-1)
				i=0;
				header.style.backgroundImage="url(images/"+imgs[i]+")";
				header.style.backgroundSize="100% 100%";
				i++;
								
			}
			setInterval(imgchange,2000);

/*			var date = new Date()
			var today = date.getTime();
			//alert(today);
			var fullPaper = (new Date("2017/10/1 23:59:59")).getTime(); 
			var acceptionDate = (new Date("2017/11/30 23:59:59")).getTime();
			var cameraReady = (new Date("2018/1/16 00:00:00")).getTime();
			var conference = (new Date("2018/3/28 00:00:00")).getTime();

			var imps = document.getElementsByClassName("dl-inline");
			if(today>=fullPaper){
				imps[0].style.textDecoration="line-through";
			}
			if(today>=acceptionDate){
				imps[1].style.textDecoration="line-through";
			}
			if(today>=cameraReady){
				imps[2].style.textDecoration="line-through";
			}
			if(today>=conference){
				imps[3].style.textDecoration="line-through";
			}
*/


function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    //var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
	var isChrome = userAgent.indexOf("Chrome") > -1; //判断是否Safari浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {//IE<11浏览器 
         var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
         reIE.test(userAgent);
         var fIEVersion = parseFloat(RegExp["$1"]);
         if(fIEVersion == 7) {
            return "IE7";
          } else if(fIEVersion == 8) {
             return "IE8";
          } else if(fIEVersion == 9) {
             return "IE9";
          } else if(fIEVersion == 10) {
             return "IE10";
          } else {
             return "IE6";//IE版本<=7
          }                  
    }//isIE<11 end

	if(isEdge) {
                return 'edge';//edge
          }
	if(isIE11) {
              return "IE11"; //IE11  
          }
    if (isFF) {
        return "FF";
    }
    if (isOpera) {
        return "Opera";
    }
	if (isChrome) {
        return "Chrome";
    }
	if (isSafari) {
        return "Safari";
    }
}//myBrowser() end
//以下是调用上面的函数

if(myBrowser()!="FF" && myBrowser()!="Opera"  && myBrowser()!="Chrome" && myBrowser()!="Safari" && myBrowser()!="edge"  && myBrowser()!="IE10" && myBrowser()!="IE11"){	
	
	document.getElementById('light').style.display='block';
	document.getElementById('fade').style.display='block';

}
