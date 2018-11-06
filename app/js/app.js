



var stage;
var TweenMax, Power4;

var verticalValue = [750,500,250,0];
var yearInformation = [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
var yearLeftValue = [7,15,30,35,40,50,60,65,72,82,91,98];
var yearRightValue = [26,36,49,56,62,67,73,77,82,87,93,100];



// @codekit-prepend "TweenMax.min.js"
// @codekit-prepend  "willow-js/stage.js"
// @codekit-prepend  "willow-js/sprite.js"



function initStage () {
    stage = new Stage({
        id:"willow-stage",
        class: "stage-style"
    });
}

function init () {

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
        text: {content: 'China’s Mobile Economy'}
       // text: {content: '中国的移动经济'}
    });

    //  

    var title_H2 = new Sprite({
        id:'title_H2', 
        class: 'title_H2-style', 
        container:title.obj, 
        text: {content: 'Total Internet users vs. mobile Internet users in China, in millions'}
    });

    var title_H3 = new Sprite({
        id:'title_H3', 
        class: 'title_H3-style', 
        container:title.obj, 
        text: {content: 'Source: https://cnnic.com.cn/IDR/ReportDownloads/201706/P020170608523740585924.pdf</br>*Forecast'}
    });

    // module 1 -----------------------

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

    // end of Module 1 -------------


    // module 2 -----------------------------------
    var mod2 = new Sprite({
        id:'mod2', 
        class: 'mod2-style',
        container:mod.obj
    });

    var mod2copy1 = new Sprite({
        id:'mod2copy1', 
        class: 'mod2copy1-style', 
        container:mod2.obj, 
        text: {content: 'Percentage of mobile Internet users making mobile payments'}
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
        text: {content: 'Forecast of shoppers using their smartphones to pay at the point of sale by 2021'}
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
        text: {content: 'U.S.'}
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
        text: {content: 'GERMANY'}
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
        text: {content: 'CHINA'}
    });

    var m2b3_value = new Sprite({
        id:'m2b3_value', 
        class: 'm2b3_value-style',
        container:m2b3_bg.obj,
        text: {content: '79%'}
    });

  

    TweenMax.fromTo(m2b1_bg.obj, 1, {width:"0%"},{delay: 1, ease: Power1.easeInOut, width:"33%"});
    TweenMax.fromTo(m2b2_bg.obj, 1, {width:"0%"},{delay: 1.5, ease: Power1.easeInOut, width:"43%"});
    TweenMax.fromTo(m2b3_bg.obj, 1, {width:"0%"},{delay: 2, ease: Power1.easeInOut, width:"100%"});


    var game = {
        score1:0,
        score2:0,
        score3:0
    };

    TweenMax.to(game, 1, {delay: 1,score1:"+=22", roundProps:"score1", onUpdate:function() {
        document.getElementById("m2b1_value").innerText = game.score1 + "%";
    }, ease:Power1.easeInOut});

    TweenMax.to(game, 1, {delay: 1.5,score2:"+=31", roundProps:"score2", onUpdate:function() {
        document.getElementById("m2b2_value").innerText = game.score2 + "%";
    }, ease:Power1.easeInOut});

    TweenMax.to(game, 1, {delay: 2,score3:"+=79", roundProps:"score3", onUpdate:function() {
        document.getElementById("m2b3_value").innerText = game.score3 + "%";
    }, ease:Power1.easeInOut});



    var mod3 = new Sprite({
        id:'mod3', 
        class: 'mod3-style',
        container:mod.obj
    });


    var mod3copy1 = new Sprite({
        id:'mod3copy1', 
        class: 'mod3copy1-style', 
        container:mod3.obj, 
        text: {content: 'Growth in total Chinese mobile payment transactions, in trillion RMB'}
    });

    var mod3graphics1 = new Sprite({
        id:'mod3graphics1', 
        class: 'mod3graphics1-style',
        container:mod3.obj,
        image: "assets/images/mod3graphix1@2x.png"
    });

 


   

    
}







window.onload = function() {
    initStage ();
    init();

};