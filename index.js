a = setInterval(()=>{
	var like  = document.getElementsByClassName("recsGamepad__button--like");
    var dislike = document.getElementsByClassName("recsGamepad__button--dislike");
    var random = Math.floor(Math.random()*100);
    if(random%50===0){
    	dislike[0].click();
    } else {
    	like[0].click();
    }
},3000);
