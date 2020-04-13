(function() {
	"use strict";
    console.log("SEAF Fired");

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
    tl.from('.section1-4',4,{delay:1.8,opacity:0, y:100,ease:Power2.easeInOut},"-=6");
    tl.from('.more',1, {opacity:0,ease:Power2.easeInOut,delay:3},"=-6");
   
    

    //second timeline//
    let t2 = new TimelineMax();
    t2.from('.second-section', 1, {opacity:0,ease:Power2.easeInOut,delay:3},'-=6');
    t2.to('.section1-4', 6, {top:'53%',ease:Power2.easeInOut},'-=3');
    t2.to('.section1-2', 6, {top:'5%',ease:Power2.easeInOut},'-=6');
    t2.to('.section1-3', 4, {top:'-27%',ease:Power2.easeInOut},'-=6');
    t2.to('.section1-1', 4, {top:'10%',ease:Power2.easeInOut},'-=6');
    t2.to('#heroImage',1,{y:-10,ease:Power0.easeNone,delay:1},'-=6');
    t2.from('.third-section,.fourth-section,.fifth-section,.newsletter,footer',2,{opacity:0,ease:Power2.easeInOut,delay:6},'-=6');
    t2.from('.section3-1', 6, {opacity:0,y:90,ease:Power2.easeInOut});  
    t2.to('.section3-1', 6, {top:'-8%',ease:Power2.easeInOut},'-=6');  

    let scene = new ScrollMagic.Scene({
        triggerElement:'.parallax',
        duration:"80%",
        triggerHook:0

    })

    scene.addIndicators({
        name: 'scene', // custom name for your scene
        indent: 520, // indent from the browser edge
        colorStart: 'red', // custom color - colorEnd
        colorTrigger: 'red',
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
        triggerHook:'onCenter'

    })
    .setTween(t3)
    .addTo(controller);

});


var isIE7 = (document.attachEvent !== undefined);
if(isIE7) {
     TimelineMax.killAll();
     ScrollMagic.killAll();
}    

var hasDocumentMode = (document.documentMode !== undefined),

isIE8 = (isDocumentMode === 8),
isIE9 = (isDocumentMode === 9),
isIE10 = (isDocumentMode === 10),
isIE11 = (isDocumentMode === 11);

if(hasDocumentMode) {
 if(isIE11){
    TimelineMax.killAll();
    ScrollMagic.killAll();
 } else if(isIE10){
    TimelineMax.killAll();
    ScrollMagic.killAll();
 } else if(isIE9){
    TimelineMax.killAll();
    ScrollMagic.killAll();
 } else if(isIE8){
    TimelineMax.killAll();
    ScrollMagic.killAll();
 }
}



})();
