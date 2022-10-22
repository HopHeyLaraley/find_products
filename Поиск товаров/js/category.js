$(document).ready(function(){
    $('.block').mouseover(function() {
        myvar = this.id;
        $("div.hidden").hide();
        $('#div'+myvar).show();
    });
});