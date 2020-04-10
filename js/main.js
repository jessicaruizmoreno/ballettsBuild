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
    tl.from('#heroImage',1 ,{opacity:0, delay:1})
    tl.from('.section1-1', 1, {y:-100, x:180, ease:Power3.easeInOut});
    tl.from('#banner', 0.5, {y:-400, ease:Power0.easeNone})
    tl.from('.section1-2, .section1-3',1 ,{ opacity:0, y:300})

    let t2 = new TimelineMax();
    t2.from('.second-section', 3, {opacity:0},'-=4')
    t2.to('.section1-2, .section1-3,.section1-1', 2, {top:'-30%'},'-=6')
    
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
