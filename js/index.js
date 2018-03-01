$(function () {
    var isDown = false;
    $('.left').on('mousedown','.rightBorder',function () {
        console.log('down事件');
        isDown = true;
    })
    $(document).on('mousemove',function () {
        if(isDown){
            console.log('move事件');
        }

    })
    $(document).on('mouseup','.rightBorder',function(){
        isDown = false;
        console.log('up事件');
    });
})