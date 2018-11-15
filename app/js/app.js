



var stage;
var TweenMax, Power4;

var verticalValue = [750,500,250,0];
var yearInformation = [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
var yearLeftValue = [7,15,30,35,40,50,60,65,72,82,91,98];
var yearRightValue = [26,36,49,56,62,67,73,77,82,87,93,100];


// @codekit-prepend "TweenMax.min.js"
// @codekit-prepend  "willow-js/stage.js"
// @codekit-prepend  "willow-js/sprite.js"


function initStage (cont) {
    stage = new Stage({
        id:"willow-stage",
        class: "stage-style",
        container: cont
    });
}

function initInfoAnimation (d) {

    var mod = new Sprite({
        id:"mod",
        class: "mod-style",
        container:stage
    });

    var title = new Sprite({
        id:'title', 
        class: 'title-style',
        container:mod.obj
    });

    var title_H1 = new Sprite({
        id:'title_H1', 
        class: 'title_H1-style', 
        container:title.obj, 
        text: {content: d.header}
       // text: {content: '中国的移动经济'}
    });

    //  

    var title_H2 = new Sprite({
        id:'title_H2', 
        class: 'title_H2-style', 
        container:title.obj, 
        text: {content: d.subheader}
    });

    var title_H3 = new Sprite({
        id:'title_H3', 
        class: 'title_H3-style', 
        container:title.obj, 
        text: {content: d.source}
    });

    // module 1 -----------------------

    function startMod1 () {
        var mod1 = new Sprite({
            id:'mod1', 
            class: 'mod1-style',
            container:mod.obj
        });
    
        var mod1lines = new Sprite({
            id:'mod1lines', 
            class: 'mod1lines-style',
            container:mod1.obj
        });
    
        for (var i = 0; i < 4; i++) {
            var lineItems = new Sprite({
                id:'lineItems-' + i, 
                class: 'lineItems-style',
                container:mod1lines.obj
            });
    
            var lineItemvalue = new Sprite({
                id:'lineItemvalue-' + i, 
                class: 'lineItemvalue-style',
                text: {content: verticalValue[i]},
                container:lineItems.obj
            });
    
            var lineItembg = new Sprite({
                id:'lineItembg-' + i, 
                class: 'lineItembg-style',
                container:lineItems.obj
            });
        }
    
        var mod2lines = new Sprite({
            id:'mod2lines', 
            class: 'mod2lines-style',
            container:mod1.obj
        });
    
        for (var i = 0; i < 12; i++ ) {
            var lineItems2 = new Sprite({
                id:'lineItems2-' + i, 
                class: 'lineItems2-style',
                container:mod2lines.obj
            });
    
            var linesContainer = new Sprite({
                id:'linesContainer-' + i, 
                class: 'linesContainer-style',
                container:lineItems2.obj
            });
    
            var lineItemleft = new Sprite({
                id:'lineItemleft-' + i, 
                class: 'lineItemleft-style',
                container:linesContainer.obj
            });
    
            var lineItemright = new Sprite({
                id:'lineItemright-' + i, 
                class: 'lineItemright-style',
                container:linesContainer.obj
            });
    
            var lineItemleftbg = new Sprite({
                id:'lineItemleftbg-' + i, 
                class: 'lineItemleftbg-style',
                container:lineItemleft.obj
            });
    
            var lineItemrightbg = new Sprite({
                id:'lineItemrightbg-' + i, 
                class: 'lineItemrightbg-style',
                container:lineItemright.obj
            });
    
            lineItemleft.obj.style.height = yearLeftValue[i] + "%";
            lineItemright.obj.style.height = yearRightValue[i] + "%";
    
    
            TweenMax.fromTo(lineItemleftbg.obj, 1, {height:"0%"},{ease: Power2.easeInOut, delay:i*0.1,height:"100%"});
            TweenMax.fromTo(lineItemrightbg.obj, 1, {height:"0%"},{ease: Power2.easeInOut, delay:i*0.1,height:"100%"});
    
            var yearsContainer = new Sprite({
                id:'yearsContainer-' + i, 
                class: 'yearsContainer-style',
                container:lineItems2.obj,
                text: {content: yearInformation[i]}
            });
    
        }
    }

    startMod1 ();

   

    // end of Module 1 -------------



    // module 2 -----------------------------------

    function startMod2 () {
        var mod2 = new Sprite({
            id:'mod2', 
            class: 'mod2-style',
            container:mod.obj
        });
    
        var mod2copy1 = new Sprite({
            id:'mod2copy1', 
            class: 'mod2copy1-style', 
            container:mod2.obj, 
            text: {content: d.header2}
        });
    
       
    
        var mod2graphics1 = new Sprite({
            id:'mod2graphics1', 
            class: 'mod2graphics1-style',
            container:mod2.obj,
            image: "assets/images/mod2graphix1@2x.png"
        });
    
       
    
        var mod2copy2 = new Sprite({
            id:'mod2copy2', 
            class: 'mod2copy2-style', 
            container:mod2.obj, 
            text: {content: d.subheader2}
        });
    
    
       
    
        
    
        var mod2graphics2 = new Sprite({
            id:'mod2graphics2', 
            class: 'mod2graphics2-style',
            container:mod2.obj
        });
    
    
    
        
    
        var m2b1 = new Sprite({
            id:'m2b1', 
            class: 'm2b1-style',
            container:mod2graphics2.obj
        });
    
    
       
    
        var m2b1_bg = new Sprite({
            id:'m2b1_bg', 
            class: 'm2b1_bg-style',
            container:m2b1.obj
        });
    
        var m2b1_country = new Sprite({
            id:'m2b1_country', 
            class: 'm2b1_country-style',
            container:m2b1_bg.obj,
            text: {content: d.usa}
        });
    
        var m2b1_value = new Sprite({
            id:'m2b1_value', 
            class: 'm2b1_value-style',
            container:m2b1_bg.obj,
            text: {content: '22%'}
        });
    
        var m2b2 = new Sprite({
            id:'m2b2', 
            class: 'm2b2-style',
            container:mod2graphics2.obj
        });
    
       
    
        var m2b2_bg = new Sprite({
            id:'m2b2_bg', 
            class: 'm2b2_bg-style',
            container:m2b2.obj
        });
    
        var m2b2_country = new Sprite({
            id:'m2b2_country', 
            class: 'm2b2_country-style',
            container:m2b2_bg.obj,
            text: {content: d.germany}
        });
    
        var m2b2_value = new Sprite({
            id:'m2b2_value', 
            class: 'm2b2_value-style',
            container:m2b2_bg.obj
         //   text: {content: '31%'}
        });
    
        var m2b3 = new Sprite({
            id:'m2b3', 
            class: 'm2b3-style',
            container:mod2graphics2.obj
        });
    
    
        var m2b3_bg = new Sprite({
            id:'m2b3_bg', 
            class: 'm2b3_bg-style',
            container:m2b3.obj
        });
    
        var m2b3_country = new Sprite({
            id:'m2b3_country', 
            class: 'm2b3_country-style',
            container:m2b3_bg.obj,
            text: {content: d.china}
        });
    
        var m2b3_value = new Sprite({
            id:'m2b3_value', 
            class: 'm2b3_value-style',
            container:m2b3_bg.obj,
            text: {content: '79%'}
        });
    
        var game = {
            score1:0,
            score2:0,
            score3:0
        };
    
    
        TweenMax.fromTo(mod2copy1.obj, 1, {alpha:0},{delay: 0.5, ease: Power1.easeInOut, alpha:1});
        TweenMax.fromTo(mod2graphics1.obj, 1, {alpha:0},{delay: 1, ease: Power1.easeInOut, alpha:1});
        TweenMax.fromTo(mod2copy2.obj, 1, {alpha:0},{delay: 1.2, ease: Power1.easeInOut, alpha:1});
        TweenMax.fromTo(m2b1_bg.obj, 1, {width:"0%"},{delay: 1, ease: Power1.easeInOut, width:"33%"});
        TweenMax.fromTo(m2b2_bg.obj, 1, {width:"0%"},{delay: 1.5, ease: Power1.easeInOut, width:"43%"});
        TweenMax.fromTo(m2b3_bg.obj, 1, {width:"0%"},{delay: 2, ease: Power1.easeInOut, width:"100%"});
        TweenMax.to(game, 1, {delay: 1,score1:"+=22", roundProps:"score1", onUpdate:function() {document.getElementById("m2b1_value").innerText = game.score1 + "%";}, ease:Power1.easeInOut});
        TweenMax.to(game, 1, {delay: 1.5,score2:"+=31", roundProps:"score2", onUpdate:function() {document.getElementById("m2b2_value").innerText = game.score2 + "%";}, ease:Power1.easeInOut});
        TweenMax.to(game, 1, {delay: 2,score3:"+=79", roundProps:"score3", onUpdate:function() {document.getElementById("m2b3_value").innerText = game.score3 + "%";}, ease:Power1.easeInOut});
    }

    startMod2 ();
    

    function startMod3 () {
        var mod3 = new Sprite({
            id:'mod3', 
            class: 'mod3-style',
            container:mod.obj
        });
    
    
        var mod3copy1 = new Sprite({
            id:'mod3copy1', 
            class: 'mod3copy1-style', 
            container:mod3.obj, 
            text: {content: d.header3}
        });
    
        var mod3graphics1 = new Sprite({
            id:'mod3graphics1', 
            class: 'mod3graphics1-style',
            container:mod3.obj,
            image: "assets/images/mod3graphix1@2x.png"
        });
    
        TweenMax.fromTo(mod3copy1.obj, 1, {alpha:0},{delay: 1.5, ease: Power1.easeInOut, alpha:1});
        TweenMax.fromTo(mod3graphics1.obj, 1, {alpha:0},{delay: 2, ease: Power1.easeInOut, alpha:1});
    
        console.log('version 1');
    }

    startMod3 ();

}


function startInfographic (d) {

    // 	container:"#infographic",
   // data: infographicsData.english
    
    initStage (d.container);
    initInfoAnimation(d.data);
}



function loadInfographic (d) {
    
    initStage (d.container);
   // initInfoAnimation(d.data);
}



