$(document).ready(function () {
   
    //init function
    function init() {
        getdata();

        // fade in effect;
        $(".bottom-section").fadeOut().fadeIn(2000);
    }

    // call init
    init();



});
   
// ajax function
function getdata() {
    $.ajax({
        url: "data.json",
        method: "GET",
        success: function (resp) {
            $.each(resp.HomeNav_Links, function (index, value) {
                $(".navbar-nav").append(
                    '<li><a>' + value + '</a></li>'
                    );
            })          
        }
    })

}