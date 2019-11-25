
// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  

var BackgroundScroll = function(params) {
    params = $.extend({
        scrollSpeed: 70,
        imageWidth: $('#orca-bg').width(),
        imageHeight: $('#orca-bg').height()
    }, params);
    
    var step = 1,
        current = 0,
        restartPosition = - (params.imageWidth - params.imageHeight);
    
    var scroll = function() {
        current -= step;
        if (current == restartPosition){
            current = 0;
        }   
        $('#orca-bg').css('backgroundPosition', current + 'px 0');
    
    };
    
    this.init = function() {
        setInterval(scroll, params.scrollSpeed);
    
    };
};

var scroll = new BackgroundScroll();
scroll.init();





// End of Your Code . Don't delete that line below!!
});
