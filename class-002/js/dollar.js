var $ = jQuery = function(){
    return  jQuery.fn.init();
}

jQuery.fn = jQuery.prototype = {
    init: function(){
        this.length = 0;
        this.test = function(){
            return this.length;
        }
        return this;
    },
    ver: "1.0",
    length: 1,
    size: function(){
        return this.length;
    }
}
jQuery.fn.init.prototype = jQuery.fn;
