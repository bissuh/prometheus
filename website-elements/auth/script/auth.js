$(document).ready(function() {

    $('#btn_signup_call').click(function(){
        $("#signup_form").switchClass('signup_hide', 'signup_show', 500);
    });
    
    $('#singin_back').click(function(e){
        e.preventDefault();
        $("#signup_form").switchClass('signup_show', 'signup_hide', 500);
    });

});