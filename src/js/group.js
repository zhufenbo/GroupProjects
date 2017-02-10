window.onload = function(){
/*	滚动监听*/
	var focu = document.getElementById("focuss");
	var top = document.getElementsByClassName("title")[0];
	var return_top = document.querySelector('.back-top');
	var timer=null;
	return_top.onclick = function(){
		clearInterval(timer);
		timer=setInterval(function(){
			var oSt = document.documentElement.scrollTop || document.body.scrollTop;
			var speed=Math.floor(-oSt/6);
			
			if(document.body.scrollTop){
				document.body.scrollTop = oSt+speed;
			}else{
				document.documentElement.scrollTop = oSt+speed;
			}
			
			if (oSt==0) {
				clearInterval(timer);
			}
		},30);
	}
    
   window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop; 
	    if( t >= 100 ) {
	    	top.classList.add("flex");
	        top.style.backgroundColor = "#ffffff";
	    }else if(t<=100){
	    	top.classList.remove("flex");
	    	top.style.backgroundColor = "#EAEAEA";
	    
	    }
    }
/* 图片旋转  */
   var imgshow = document.getElementsByTagName("img"); 
   for(var i=0;i<imgshow.length;i++){ 
		imgshow[i].index = i;
		imgshow[i].onmouseover = function(){
			var _index = this.index;
			for(var j=0;j<imgshow.length;j++){
				imgshow[j].classList.remove('active');	
				imgshow[j].classList.remove('opa');	
			}
			this.classList.add('active');
			this.classList.add('opa');
		}
		imgshow[i].onmouseout = function(){
			for(var j=0;j<imgshow.length;j++){
				imgshow[j].classList.remove('active');	
				imgshow[j].classList.remove('opa');	
			}
		}
	}
/* footer操作  */
   var change = document. querySelector(".eignt input");
   var jia = document.querySelector(".jia");
   var jian = document.querySelector(".jian");
   var showe = document.querySelector(".showe");
   var eight = document.querySelector(".eignt");
  
    eight.onmouseover = function(){
    	jia.style.display = "block";
    	jian.style.display = "block";
    }
    eight.onmouseout = function(){
    	jia.style.display = "none";
    	jian.style.display = "none";
    }

    jia.onclick = function(){
      console.log(change.value);  
    	change.value = parseInt(change.value)+1;  
    }
    jian.onclick = function(){
    	if(change.value == 1){
    		change.value = 1;
    	}else if(change.value>1){
    		change.value = parseInt(change.value)-1;
    		 
    	}
    }
    
}
