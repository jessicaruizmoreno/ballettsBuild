(function() {
	"use strict";
    console.log("SEAF Fired");

    //Nav Bar triggers//
    
    document.getElementsByClassName("navbar")[0].style.top='50px';

    if (window.matchMedia("(min-width: 320px)").matches) {
        document.getElementById("showNav").style.top='108px';
      }

      if (window.matchMedia("(min-width: 768px)").matches) {
        document.getElementById("showNav").style.top='132px';
      }
      
      
    window.addEventListener("scroll", function(){
        if(window.scrollY > 2) { 
                  document.getElementsByClassName("social-nav")[0].style.display = 'none';
                  document.getElementsByClassName("navbar")[0].style.top='0px';

                  if (window.matchMedia("(min-width: 320px)").matches) {
                    document.getElementById("showNav").style.top='68px';
                  }

                  if (window.matchMedia("(min-width: 768px)").matches) {
                    document.getElementById("showNav").style.top='77px';
                  }

                } else {
                    document.getElementsByClassName("social-nav")[0].style.display = '';
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


//Smooth Scroll//

var speed = 500;
var moving_frequency = 15;
var links = document.getElementsByTagName('a');
var href;
for(var i=0; i<links.length; i++)
{   
    href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
    if(href !== null && href.length > 1 && href.substr(0, 1) == '#')
    {
        links[i].onclick = function()
        {
            var element;
            var href = this.attributes.href.nodeValue.toString();
            if(element = document.getElementById(href.substr(1)))
            {
                var hop_count = speed/moving_frequency
                var getScrollTopDocumentAtBegin = getScrollTopDocument();
                var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                for(var i = 1; i <= hop_count; i++)
                {
                    (function()
                    {
                        var hop_top_position = gap*i;
                        setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
                    })();
                }
            }

            return false;
        };
    }
}

var getScrollTopElement =  function (e)
{
    var top = -200;

    while (e.offsetParent != undefined && e.offsetParent != null)
    {
        top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
        e = e.offsetParent;
    }

    return top;
};

var getScrollTopDocument = function()
{
    return document.documentElement.scrollTop + document.body.scrollTop;
};

	
})();