(function() {
	"use strict";
    console.log("SEAF Fired");
    
    document.getElementsByClassName("navbar")[0].style.top='40px';

    if (window.matchMedia("(min-width: 320px)").matches) {
        document.getElementById("showNav").style.top='108px';
      }

      if (window.matchMedia("(min-width: 768px)").matches) {
        document.getElementById("showNav").style.top='117px';
      }
      
      
    window.addEventListener("scroll", function(){
        if(window.scrollY > 2) { 
                  document.getElementsByClassName("social-nav")[0].style.visibility = 'hidden';
                  document.getElementsByClassName("navbar")[0].style.top='0px';

                  if (window.matchMedia("(min-width: 320px)").matches) {
                    document.getElementById("showNav").style.top='68px';
                  }

                  if (window.matchMedia("(min-width: 768px)").matches) {
                    document.getElementById("showNav").style.top='77px';
                  }

                } else {
                    document.getElementsByClassName("social-nav")[0].style.visibility = 'visible';
                    document.getElementsByClassName("navbar")[0].style.top='';



                    if (window.matchMedia("(min-width: 320px)").matches) {
                        document.getElementById("showNav").style.top='106px';
                      }
                


                    if (window.matchMedia("(min-width: 768px)").matches) {
                        document.getElementById("showNav").style.top='115px';
                      }


                    if (window.matchMedia("(min-width: 992px)").matches) {
                        document.getElementById("showNav").style.top='122px';
                        document.getElementsByClassName("navbar")[0].style.top='40px';

                       }
                }
        
})





	
})();