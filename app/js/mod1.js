

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