window.addEventListener('DOMContentLoaded', (event) => {

    (function () {
        "use strict";
        console.log("SEAF Fired");



        //ACCESSORIES//
        let weddingAccContainer = document.getElementById('weddingAcc-gallery');

        if (weddingAccContainer) {
            axios.get('https://bridalwebsolutions.net/retail/onlinestore/api-products.cfm?cat=accessories&mpp=30&format=json')
                .then(function (response) {
                    console.log(response.data);

                    //rendering out response data
                    renderWeddingAcc(response.data);

                })

                .catch(function (err) {
                    if (!err.response) {
                        document.getElementById("weddingAcc-gallery").innerHTML = "Error";
                    }

                    console.log(err.response);

                });
        } else {
            console.log("dont load wedding accessories");
        }


        function renderWeddingAcc(data) {
            let htmlweddingAcc = "";
            for (var i = 0; i < data.Products.length; i++) {
                let output = data.Products[i].SalePrice;
                // console.log(output);

                //regex right currency code
                let myRe = output.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

                //console.log(myRe);


                htmlweddingAcc +=
                    "<div class='col col-sm-6 col-md-4'>" +
                    "<div class='imgBox'>" +
                    "<span class='imgProduct' style='background:url(" + data.Products[i].ImgURL + ") center center no-repeat; background-size:cover;'></span>" +
                    "<button id='eye-icon' onClick='changeIcon2(this)'><i class='far fa-eye' id='eye'></i></button>" +
                    "<button id='heart-icon' onClick='changeIcon(this)'><a><i class='far fa-heart' id='heart'></i></a></button>" +
                    "</div>" +
                    "<div class='box-render'>" +
                    "<h3>ID " + data.Products[i].DisplayID + "</h3>" +
                    "<p class='output'>$" + myRe + "</p>" +
                    "</div>" +
                    "</div>";
            }

            weddingAccContainer.insertAdjacentHTML('beforeend', htmlweddingAcc);
        }





        //SPEICAL OCCASIONS//
        let specOccContainer = document.getElementById('specialOcc-gallery');


        if (specOccContainer) {
            axios.get('https://bridalwebsolutions.net/retail/onlinestore/api-products.cfm?cat=special-occasions&mpp=30&format=json')
                .then(function (response) {
                    console.log(response.data);

                    //rendering out response data
                    renderSpecOcc(response.data);

                })

                .catch(function (err) {
                    if (!err.response) {
                        document.getElementById("specialOcc-gallery").innerHTML = "Error";
                    }

                    console.log(err.response);

                });
        } else {
            console.log("dont load specialOccasions");
        }

        function renderSpecOcc(data) {
            let htmlspecOcc = "";
            for (var i = 0; i < data.Products.length; i++) {
                let output = data.Products[i].SalePrice;
                // console.log(output);

                //regex right currency code
                let myRe = output.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

                //console.log(myRe);


                htmlspecOcc +=
                    "<div class='col col-sm-6 col-md-4'>" +
                    "<div class='imgBox'>" +
                    "<span class='imgProduct' style='background:url(" + data.Products[i].ImgURL + ") center center no-repeat; background-size:cover;'></span>" +
                    "<button id='eye-icon' onClick='changeIcon2(this)'><i class='far fa-eye' id='eye'></i></button>" +
                    "<button id='heart-icon' onClick='changeIcon(this)'><a><i class='far fa-heart' id='heart'></i></a></button>" +
                    "</div>" +
                    "<div class='box-render'>" +
                    "<h3>ID " + data.Products[i].DisplayID + "</h3>" +
                    "<p class='output'>$" + myRe + "</p>" +
                    "</div>" +
                    "</div>";
            }

            specOccContainer.insertAdjacentHTML('beforeend', htmlspecOcc);
        }



        //PROM & GRAD//
        let promgradContainer = document.getElementById('promgrad-gallery');

        if (promgradContainer) {
            axios.get('https://bridalwebsolutions.net/retail/onlinestore/api-products.cfm?cat=prom&mpp=30&format=json')
                .then(function (response) {
                    console.log(response.data);

                    //rendering out response data
                    renderProm(response.data);

                })

                .catch(function (err) {
                    if (!err.response) {
                        document.getElementById("promgrad-gallery").innerHTML = "Error";
                    }

                    console.log(err.response);

                });
        } else {
            console.log("dont load promgrads");
        }


        function renderProm(data) {
            let htmlpromgrad = "";
            for (var i = 0; i < data.Products.length; i++) {
                let output = data.Products[i].SalePrice;
                // console.log(output);

                //regex right currency code
                let myRe = output.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

                //console.log(myRe);


                htmlpromgrad +=
                    "<div class='col col-sm-6 col-md-4'>" +
                    "<div class='imgBox'>" +
                    "<span class='imgProduct' style='background:url(" + data.Products[i].ImgURL + ") center center no-repeat; background-size:cover;'></span>" +
                    "<button id='eye-icon' onClick='changeIcon2(this)'><i class='far fa-eye' id='eye'></i></button>" +
                    "<button id='heart-icon' onClick='changeIcon(this)'><a><i class='far fa-heart' id='heart'></i></a></button>" +
                    "</div>" +
                    "<div class='box-render'>" +
                    "<h3>ID " + data.Products[i].DisplayID + "</h3>" +
                    "<p class='output'>$" + myRe + "</p>" +
                    "</div>" +
                    "</div>";
            }


            promgradContainer.insertAdjacentHTML('beforeend', htmlpromgrad);
        }



        //BRIDEMAIDS//
        let bridemaidsContainer = document.getElementById('bridemaidsgallery');

        if (bridemaidsContainer) {
            axios.get('https://bridalwebsolutions.net/retail/onlinestore/api-products.cfm?cat=bridesmaids&mpp=30&format=json')
                .then(function (response) {
                    console.log(response.data);

                    //rendering out response data
                    renderBridesmaids(response.data);

                })

                .catch(function (err) {
                    if (!err.response) {
                        document.getElementById("bridemaidsgallery").innerHTML = "Error";
                    }

                    console.log(err.response);

                });
        } else {
            console.log("dont load bridemaids");
        }


        function renderBridesmaids(data) {
            let htmlBridemaids = "";
            for (var i = 0; i < data.Products.length; i++) {
                let output = data.Products[i].SalePrice;
                // console.log(output);

                //regex right currency code
                let myRe = output.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

                //console.log(myRe);


                htmlBridemaids +=
                    "<div class='col col-sm-6 col-md-4'>" +
                    "<div class='imgBox'>" +
                    "<span class='imgProduct' style='background:url(" + data.Products[i].ImgURL + ") center center no-repeat; background-size:cover;'></span>" +
                    "<button id='eye-icon' onClick='changeIcon2(this)'><i class='far fa-eye' id='eye'></i></button>" +
                    "<button id='heart-icon' onClick='changeIcon(this)'><a><i class='far fa-heart' id='heart'></i></a></button>" +
                    "</div>" +
                    "<div class='box-render'>" +
                    "<h3>ID " + data.Products[i].DisplayID + "</h3>" +
                    "<p class='output'>$" + myRe + "</p>" +
                    "</div>" +
                    "</div>";
            }

            bridemaidsContainer.insertAdjacentHTML('beforeend', htmlBridemaids);
        }




        ////BRIDAL GOWNS GET////


        let bridalContainer = document.getElementById('bridalgallery');

        //finding if page has div id bridal gallery if yes get products api 
        if (bridalContainer) {

            let queryString = 'pg=1';
           
            let paramNum = queryString;
    
            let pageUrl = 'https://bridalwebsolutions.net/retail/onlinestore/api-products.cfm?cat=bridal-gowns&mpp=30&' + paramNum + '&format=json';
    
            //getting the pagination ids
    
            let page1 = document.getElementById('1');
            page1.addEventListener('click', function (e) {
                nextPage(e.target.id);
            }, false);

    
            let page2 = document.getElementById('2');
            page2.addEventListener('click', function (e) {
                nextPage(e.target.id);
            }, false);
    
            let page3 = document.getElementById('3');
            page3.addEventListener('click', function (e) {
                nextPage(e.target.id);
            }, false);


            function nextPage(id) {
            let mypage =  'pg=' + id;
            console.log(mypage);  
            }

         
           

            

            axios.get(pageUrl)
                .then(function (response) {
                    //console.log(response.data);

                    //rendering out response data to function
                    renderBridalGowns(response.data);

                })

                .catch(function (err) {
                    if (!err.response) {
                        document.getElementById("bridalgallery").innerHTML = "Error";
                    }

                    console.log(err.response);

                });


        } else {
            console.log("dont load bridalgowns");
        }








        //function for rendering bridal Gowns call
        function renderBridalGowns(data) {
            let htmlBridal = "";

            //looping through each array     
            for (var i = 0; i < data.Products.length; i++) {

                let productId = data.Products[i].ID;
                //console.log(productId);

                //getting api product details
                axios.get('https://www.bridalwebsolutions.net/retail/onlinestore/api-productdetails.cfm?id=' + productId + '&format=json')
                    .then(function (response) {
                        //console.log(response.data);

                        //rendering renderModal
                        console.log(response.data);

                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })




                let output = data.Products[i].SalePrice;
                // console.log(output);

                //regex right currency code to add comma if digits are greater then 3
                let myRe = output.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                //console.log(myRe);


                htmlBridal +=
                    //getting data for product pages gallery
                    "<div class='col col-sm-6 col-md-4'>" +
                    "<div class='imgBox'>" +
                    "<span class='imgProduct' style='background:url(" + data.Products[i].ImgURL + ") center center no-repeat; background-size:130%;'></span>" +
                    "<button id='eye-icon' onClick='changeIcon2(this)' data-toggle='modal' data-target='#quickView'><i class='far fa-eye' id='eye'></i></button>" +
                    "<button id='heart-icon' onClick='changeIcon(this)'><a><i class='far fa-heart' id='heart'></i></a></button>" +
                    "</div>" +
                    "<div class='box-render'>" +
                    "<h3 class='h3-product'>ID " + data.Products[i].DisplayID + "</h3>" +
                    "<p class='output'>$" + myRe + "</p>" +
                    "</div>" +
                    "</div>"

            }
            //returning htmlBridal to div id 
            bridalContainer.insertAdjacentHTML('beforeend', htmlBridal);
        }



        //renderDetail 
        //getting data for product pages gallery

        //getting data for modal 
        /*    htmlDetail+= 
           "<div class='modal fade quickView' id='quickView'>"+
           "<div class='modal-dialog'>"+
           "<div class='modal-content'>"+
           "<a href='#' data-dismiss='modal' class='class pull-right'><span class='glyphicon glyphicon-remove'></span></a>"+
           "</div>"+
           "<div class='modal-body'>"+
              "<div class='row'>"+
                       "<div class='col-md-6 img-product'>"+
                           "<img src="+data.Products[i].ImgURL+" class='img-responsive'>"+
                       "</div>"+
                  "<div class='col-md-6 quick'>"+
                           "<h2>ID "+ data.Products[i].DisplayID+"</h2>"+
                           "<p>"+data.Products[i].Description+"</p>"+
                           "<h3 class='price'>"+data.Products[i].SalePrice;+"</h3>"+
                      "<div class='row'>"+
                               "<div class='col-md-4 col-sm-6 col-xs-12'>"+
                                   "<select class='form-control name='select'>"+
                                       "<option value='' selected=''>data.Products[i].Color1AvailableColors</option>"+
                                       "<option value='black'>Black</option>"+
                                       "<option value='white'>White</option>"+
                                   "</select>"+
                                  "</div>"+
                              
                                  "<div class='col-md-4 col-sm-6 col-xs-12'>"+
                                   "<p>"+data.Products[i].AvailableSizes+"</p>"
                                  "</div>"+
                          "<div class='btn-ground'>"+
                               "<button type='button' class='btn btn-primary'>Buy Now</button>"+
                           "</div>"+
                      "</div>"+
                   "</div>"+
               "</div>"+
          "</div>"+
          "</div>"+
          "</div>"; */











        /////SEARCH FUNCTION GET///

        //getting search location src=
        let params = location.search.substr(1).split("&");


        let input = location.search.substr(6);


        let container = document.getElementById('results');


        //if html page has div id results start axios
        if (container) {
            //concatination params into url
            axios.get('https://www.bridalwebsolutions.net/retail/onlinestore/api-products.cfm?' + params + '&format=json')
                .then(function (response) {

                    //getting reponse data
                    console.log(response.data);

                    //rendering out response data to a renderHTML function
                    renderHTML(response.data);
                })

                .catch(function (err) {
                    if (!err.response) {
                        document.getElementById("results").innerHTML = "Please add a keyword to search";
                    }

                    console.log(err.response);

                })


        } else {
            console.log("dont load results");
        }






        function renderHTML(data) {
            let htmlString = "";
            for (var i = 0; i < data.Products.length; i++) {
                let output = data.Products[i].SalePrice;
                // console.log(output);

                //regex right currency code
                let myRe = output.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

                //console.log(myRe);


                htmlString +=
                    "<div class='col col-sm-6 col-md-4'>" +
                    "<div class='imgBox'>" +
                    "<span class='imgProduct' style='background:url(" + data.Products[i].ImgURL + ") center center no-repeat; background-size:130%;'></span>" +
                    "<button id='eye-icon' onClick='changeIcon2(this)' data-toggle='modal' data-target='#quickView'><i class='far fa-eye' id='eye'></i></button>" +
                    "<button id='heart-icon' onClick='changeIcon(this)'><a><i class='far fa-heart' id='heart'></i></a></button>" +
                    "</div>" +
                    "<div class='box-render'>" +
                    "<h3>ID " + data.Products[i].DisplayID + "</h3>" +
                    "<p class='output'>$" + myRe + "</p>" +
                    "</div>" +
                    "</div>"
            }




            if (data.Products.length == 0) {
                document.getElementById("results").innerHTML = "Results for '" + input + "' was not found.";
            } else {
                var para = document.createElement("h1");
                para.innerHTML = "Results: " + input + "";
                document.getElementById("header").appendChild(para);

                var total = document.createElement("P");
                total.innerHTML = "Total Results: " + data.Products.length + "";
                document.getElementById("header").appendChild(total);

            }
            container.insertAdjacentHTML('beforeend', htmlString);
        }




        //Smooth Scroll//
        let speed = 500;
        let moving_frequency = 15;
        let links = document.querySelectorAll('#banner a');
        let href;
        for (let i = 0; i < links.length; i++) {
            href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
            if (href !== null && href.length > 1 && href.substr(0, 1) == '#') {
                links[i].onclick = function () {
                    let element;
                    let href = this.attributes.href.nodeValue.toString();
                    if (element = document.getElementById(href.substr(1))) {
                        let hop_count = speed / moving_frequency
                        let getScrollTopDocumentAtBegin = getScrollTopDocument();
                        let gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                        for (let i = 1; i <= hop_count; i++) {
                            (function () {
                                let hop_top_position = gap * i;
                                setTimeout(function () {
                                    window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin);
                                }, moving_frequency * i);
                            })();
                        }
                    }

                    return false;
                };
            }
        }

        let getScrollTopElement = function (e) {
            let top = -200;

            while (e.offsetParent != undefined && e.offsetParent != null) {
                top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
                e = e.offsetParent;
            }

            return top;
        };

        let getScrollTopDocument = function () {
            return document.documentElement.scrollTop + document.body.scrollTop;
        };



        //Animation Bubbles//

        let controller = new ScrollMagic.Controller();

        //automatic//
        let tl = new TimelineMax();
        tl.from('#heroImage', 1, {
            opacity: 0,
            delay: 1
        });
        tl.from('#banner', 1, {
            opacity: 0,
            y: -30,
            ease: Power2.easeInOut
        });
        tl.from('.section1-1', 4, {
            delay: 3,
            opacity: 0,
            x: 50,
            ease: Power2.easeInOut
        }, "-=6");
        tl.from('.section1-2, .section1-3', 4, {
            delay: 3,
            opacity: 0,
            y: 50,
            ease: Power2.easeInOut
        }, "-=6");
        tl.from('.section1-4', 6, {
            opacity: 0,
            ease: Power2.easeInOut
        }, "-=6");
        tl.from('.more', 1, {
            opacity: 0,
            ease: Power2.easeInOut,
            delay: 3
        }, "=-6");
        tl.from('.second-section,.third-section,.fourth-section,.fifth-section,.sixth-section', 1, {
            opacity: 0,
            ease: Power2.easeInOut,
            delay: 3
        }, '-=6');


        //second timeline//
        let t2 = new TimelineMax();
        t2.to('.section1-4', 3, {
            top: '28%',
            ease: Power2.easeInOut
        }, '-=3');
        t2.to('.section1-2', 6, {
            top: '5%',
            ease: Power2.easeInOut
        }, '-=6');
        t2.to('.section1-3', 4, {
            top: '-31%',
            ease: Power2.easeInOut
        }, '-=6');
        t2.to('.section1-1', 4, {
            top: '10%',
            ease: Power2.easeInOut,
            delay: 1
        }, '-=6');

        t2.from('.section3-1', 6, {
            opacity: 0,
            y: 90,
            ease: Power2.easeInOut
        });
        t2.to('.section3-1', 6, {
            top: '-8%',
            ease: Power2.easeInOut
        }, '-=6');


        let scene = new ScrollMagic.Scene({
                triggerElement: '.parallax',
                duration: "80%",
                triggerHook: "onLeave",
                offset: 100
            })
            .setTween(t2)
            .setPin('.parallax')
            .addTo(controller);



        let t3 = new TimelineMax();
        t3.from('.section4-1', 6, {
            opacity: 0,
            y: 90,
            ease: Power2.easeInOut
        }, '-=6');
        t3.from('.section4-2', 6, {
            opacity: 0,
            y: 200,
            ease: Power2.easeInOut
        }, '-=6');
        t3.to('.section4-2', 6, {
            top: '65%',
            ease: Power2.easeInOut
        }, '-=6');

        let scene2 = new ScrollMagic.Scene({
                triggerElement: '.third-section',
                duration: "80%",
                triggerHook: 'onLeave',
                offset: 80
            })
            .setTween(t3)
            .addTo(controller);




        var isIE7 = (document.attachEvent !== undefined);
        if (isIE7) {
            TimelineMax.killAll();
            ScrollMagic.killAll();
        }

        var isIE8 = (document.attachEvent !== undefined);
        if (isIE8) {
            TimelineMax.killAll();
            ScrollMagic.killAll();
        }

        var isIE9 = (document.attachEvent !== undefined);
        if (isIE9) {
            TimelineMax.killAll();
            ScrollMagic.killAll();
        }

        var isIE10 = (document.attachEvent !== undefined);
        if (isIE10) {
            TimelineMax.killAll();
            ScrollMagic.killAll();
        }

        var isIE11 = (document.attachEvent !== undefined);
        if (isIE11) {
            TimelineMax.killAll();
            ScrollMagic.killAll();
        }




    })();
});