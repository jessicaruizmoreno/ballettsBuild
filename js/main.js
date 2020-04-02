(function() {
	"use strict";
    console.log("SEAF Fired");
    
    
    window.addEventListener("scroll", function(){
        if(window.scrollY > 2) {
          document.getElementsByClassName("social-nav")[0].style.visibility = 'hidden';
          document.getElementsByClassName("navbar")[0].style.top='0';
        } else {
            document.getElementsByClassName("social-nav")[0].style.visibility = 'visible';
            document.getElementsByClassName("navbar")[0].style.top='';
        }

    });
	
})();