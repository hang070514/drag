$(function () {
    var isDown = false;
    //左边原始宽度
    var leftWidth = $('.left').width();
    console.log('leftWidth===='+leftWidth);
    //鼠标按下的x坐标
    var downX = 0;
    $('.left').on('mousedown','.rightBorder',function (e) {
        console.log('down事件'+e.pageX);
        isDown = true;
        downX = e.pageX;
    })

    $('.left').on('mouseenter','.rightBorder',function (e) {
        console.log('enter事件'+e.pageX);
    })
    $('.left').on('mouseleave','.rightBorder',function (e) {
        console.log('leave事件'+e.pageX);
       /* if(Math.abs(e.pageX - downX)){
            isDown = false;
        }*/

    })

    $(document).on('mousemove',function (e) {
        if(isDown){
            if(e.pageX - downX >= 0){
                //向右移动
                if($('.left').width() < leftWidth){
                    var distance = e.pageX - downX;
                    console.log('move事件右移if'+e.pageX);
                    console.log('left==='+$('.rightBorder').position().left);
                    $('.rightBorder').css('left',$('.rightBorder').position().left+distance);
                    $('.left').width($('.left').width()+distance);
                }else{
                    console.log('move事件右移else width'+$('.left').width());
                    console.log('move事件右移else'+e.pageX);
                    $('.rightBorder').css('left',$('.left').width() - $('.rightBorder').width());
                    $('.left').width(leftWidth);
                }
            }else{
                //向左移动
                console.log('move事件左移'+e.pageX);
                if($('.left').width() > $('.rightBorder').width()){
                    $('.rightBorder').css('left',e.pageX);
                    $('.left').width(e.pageX);
                }else{
                    $('.rightBorder').css('left',$('.rightBorder').width());
                    $('.left').width($('.rightBorder').width());
                }

            }


        }
    })


    $(document).on('mouseup',function(){
        isDown = false;
        console.log('up事件12');
    });

    //console.log('url==='+url);
})