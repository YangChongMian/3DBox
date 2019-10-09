
$(function(){
    const imgLazy = {
        windowHeight : window.innerHeight,//窗口可视区高度
        imgListOne:$('li:nth-child(4)'),
        imgListOne3:$('li:nth-child(3)'),
        imgListOne5:$('li:nth-child(5)'),
        imgListOne6:$('li:nth-child(6)'),
        imgListOne7:$('li:nth-child(7)'),
        imgListOne8:$('li:nth-child(8)'),
        imgListOne9:$('li:nth-child(9)'),
        imgListOne10:$('li:nth-child(10)'),
        imgList:$('li'),
        imgOffsetTop:0,
        imgLazy:function(imgList){
            let scrollTop = $(window).scrollTop();//当前滚动的高度
            imgLazy.imgOffsetTop = $(imgList).offset().top;
            //console.log(imgLazy.imgOffsetTop);
            if(imgLazy.imgOffsetTop < (scrollTop + imgLazy.windowHeight)){
                $(imgList).addClass('actives');
            }
        },
        imgLoad:function(){
            imgLazy.imgList.map((index,item) => {
                let itemOffsetTop = $(item).offset().top;
                if(itemOffsetTop < imgLazy.windowHeight){
                    $(item).addClass('actives');
                }
            })
        }
    };

    imgLazy.imgLoad();
    $(window).on('scroll',() => {
        imgLazy.imgLazy(imgLazy.imgListOne);
        imgLazy.imgLazy(imgLazy.imgListOne3);
        imgLazy.imgLazy(imgLazy.imgListOne5);
        imgLazy.imgLazy(imgLazy.imgListOne6);
        imgLazy.imgLazy(imgLazy.imgListOne7);
        imgLazy.imgLazy(imgLazy.imgListOne8);
        imgLazy.imgLazy(imgLazy.imgListOne9);
        imgLazy.imgLazy(imgLazy.imgListOne10);
    });
});