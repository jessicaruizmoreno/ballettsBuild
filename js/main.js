
(function() {
	"use strict";
    console.log("SEAF Fired");
    
    


    let container = document.getElementById('results');  
  
    if (document.getElementById('results')){   
    let params = window.location.search.substr(1);   
    let xhr = new XMLHttpRequest();
    let url = 'http://www.bridalwebsolutions.net/retail/onlinestore/api-products.cfm?'+params+'&format=json';
    console.log("foudn div");
    xhr.open('GET', url, true);
    xhr.onload =function(){     
    if(xhr.status >=200 && xhr.status < 400){
        var ourData = null;
try {
    ourData = JSON.parse(xhr.responseText);
    renderHTML(ourData);
}
catch(e) {
  // forget about it :)
}        
}
    };
xhr.send(params);
}
else{
    console.log("xhr dont load");
}


    function renderHTML(data){  
        let htmlString ="";  
        if (data !== 'undefined'|| data !== 'null' || data.length === 0  || data === ""){ 
        for (var i = 0; i < data.Products.length; i++){
            htmlString += "<p>" + data.Products[i]. SalePrice + "</p>" + "<img src="+data.Products[i].ImgURL+">";
        }
        console.log("show functions");    
        
    }else{  
        console.log("no results");
        }
        container.insertAdjacentHTML('beforeend',htmlString);
    }


//Smooth Scroll//
let speed = 500;
let moving_frequency = 15;
let links = document.querySelectorAll('#banner a');
let href;
for(let i=0; i<links.length; i++)
{   
    href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
    if(href !== null && href.length > 1 && href.substr(0, 1) == '#')
    {
        links[i].onclick = function()
        {
            let element;
            let href = this.attributes.href.nodeValue.toString();
            if(element = document.getElementById(href.substr(1)))
            {
                let hop_count = speed/moving_frequency
                let getScrollTopDocumentAtBegin = getScrollTopDocument();
                let gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                for(let i = 1; i <= hop_count; i++)
                {
                    (function()
                    {
                        let hop_top_position = gap*i;
                        setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
                    })();
                }
            }

            return false;
        };
    }
}

let getScrollTopElement =  function (e)
{
    let top = -200;

    while (e.offsetParent != undefined && e.offsetParent != null)
    {
        top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
        e = e.offsetParent;
    }

    return top;
};

let getScrollTopDocument = function()
{
    return document.documentElement.scrollTop + document.body.scrollTop;
};


//Animation Bubbles//
document.addEventListener('DOMContentLoaded',()=>{

    let controller = new ScrollMagic.Controller();




    //automatic//
    let tl = new TimelineMax();
    tl.from('#heroImage',1 ,{opacity:0,delay:1});
    tl.from('#banner', 1, {opacity:0, y:-30, ease:Power2.easeInOut});
    tl.from('.section1-1', 4, {delay:3,opacity:0, x:50, ease:Power2.easeInOut},"-=6");
    tl.from('.section1-2, .section1-3',4 ,{delay:3,opacity:0, y:50,ease:Power2.easeInOut},"-=6");
    tl.from('.section1-4',4,{opacity:0,ease:Power2.easeInOut},"-=6");
    tl.from('.more',1, {opacity:0,ease:Power2.easeInOut,delay:3},"=-6");
    tl.from('.second-section', 1, {opacity:0,ease:Power2.easeInOut,delay:3},'-=6');
    

    //second timeline//
    let t2 = new TimelineMax();

    t2.to('.section1-4', 3, {top:'28%',ease:Power2.easeInOut},'-=3');
    t2.to('.section1-2', 6, {top:'5%',ease:Power2.easeInOut},'-=6');
    t2.to('.section1-3', 4, {top:'-31%',ease:Power2.easeInOut},'-=6');
    t2.to('.section1-1', 4, {top:'10%',ease:Power2.easeInOut,delay:1},'-=6');
    t2.from('.third-section,.fourth-section,.fifth-section,.sixth-section',2,{opacity:0,ease:Power2.easeInOut,delay:6},'-=6');
    t2.from('.section3-1', 6, {opacity:0,y:90,ease:Power2.easeInOut});  
    t2.to('.section3-1', 6, {top:'-8%',ease:Power2.easeInOut},'-=6');  

    let scene = new ScrollMagic.Scene({
        triggerElement:'.parallax',
        duration:"80%",
        triggerHook:"onLeave",
        offset: 100

    })


    .setTween(t2)
    .setPin('.parallax')
    .addTo(controller);

    let t3 = new TimelineMax();
    t3.from('.section4-1', 6, {opacity:0,y:90,ease:Power2.easeInOut},'-=6');
    t3.from('.section4-2', 6, {opacity:0,y:200,ease:Power2.easeInOut},'-=6');
    t3.to('.section4-2', 6, {top:'65%',ease:Power2.easeInOut},'-=6'); 

    let scene2 = new ScrollMagic.Scene({
        triggerElement:'.third-section',
        duration:"80%",
        triggerHook:'onLeave',
        offset: 80

    })
    .setTween(t3)
    .addTo(controller);

});


var isIE7 = (document.attachEvent !== undefined);
if(isIE7) {
     TimelineMax.killAll();
     ScrollMagic.killAll();
}    

var isIE8 = (document.attachEvent !== undefined);
if(isIE8) {
     TimelineMax.killAll();
     ScrollMagic.killAll();
}    

var isIE9 = (document.attachEvent !== undefined);
if(isIE9) {
     TimelineMax.killAll();
     ScrollMagic.killAll();
}    

var isIE10 = (document.attachEvent !== undefined);
if(isIE10) {
     TimelineMax.killAll();
     ScrollMagic.killAll();
}    

var isIE11 = (document.attachEvent !== undefined);
if(isIE11) {
     TimelineMax.killAll();
     ScrollMagic.killAll();

}




})();
