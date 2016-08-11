var $ = jQuery = function(){
    return  jQuery.fn.init();
}

jQuery.fn = jQuery.prototype = {
    init: function(){
        return this;
    },
    ver: "1.0",
    size: function(){
        return this.length;
    }
}
