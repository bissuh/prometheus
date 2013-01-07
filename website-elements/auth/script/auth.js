$(document).ready(function() {

    $('#btn_signup_call').click(function(){
        $("#signup_form").switchClass('signup_hide', 'signup_show', 500);
    });
    
    $('#singin_back').click(function(e){
        e.preventDefault();
        $("#signup_form").switchClass('signup_show', 'signup_hide', 500);
    });

	//qTip
	
	//$('a[title]').qtip()
	
	var signUpForm = $('#auth_form');

		signUpForm.validate({
				errorClass: "errormessage",
				onkeyup: false,
				errorClass: 'error',
				validClass: 'valid',
				rules: {
					first_name: { required: true, minlength: 3 }
				},
				errorPlacement: function(error, element)
				{
					// Set positioning based on the elements position in the form
					var elem = $(element),
						corners = ['left center', 'right center'],
						flipIt = elem.parents('span.right').length > 0;

					// Check we have a valid error message
					if(!error.is(':empty')) {
						// Apply the tooltip only if it isn't valid
						elem.filter(':not(.valid)').qtip({
							overwrite: false,
							content: error,
							position: {
								my: corners[ flipIt ? 0 : 1 ],
								at: corners[ flipIt ? 1 : 0 ],
								viewport: $(window)
							},
							show: {
								event: false,
								ready: true
							},
							hide: false,
							style: {
								classes: 'qtip-red' // Make it red... the classic error colour!
							}
						})

						// If we have a tooltip on this element already, just update its content
						.qtip('option', 'content.text', error);
					}

					// If the error is empty, remove the qTip
					else { elem.qtip('destroy'); }
				},
				success: $.noop, // Odd workaround for errorPlacement not firing!
		})

});