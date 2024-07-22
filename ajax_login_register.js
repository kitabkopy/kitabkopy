/* This module is copywrite to ozxmod
 * Author: ozxmod(ozxmod@gmail.com)
 * It is illegal to remove this comment without prior notice to ozxmod(ozxmod@gmail.com)
*/ 
$(document).ready(function(){
	  $('#tabs-login a').tabs();
	  
 	  $("#cross_icon_login").bind("click", function() {
 	 	  
  			 $("#ajax_login").bPopup().close(); 
 	  });
  	
  	 $("#cross_icon_signup").bind("click", function() {
	 	 
		$("#ajax_signup").bPopup().close(); 
  	 });
  	 
  	$("#footer_close").bind("click", function() {
	 	 
		$("#ajax_login").bPopup().close(); 
  	 });
 	  
	  $("#loginpopup").bind("click", function() {
		  $('#ajaxsignuptab').removeClass("selected");
		  $('#ajaxlogintab').addClass("selected");
		  
		  $('#tab-login').show();
		  $('#tab-register').hide();
		  
		  $('#ajax_login').bPopup({
			    easing: 'easeOutBack', //uses jQuery easing plugin
		            speed: 0,
		            transition: 'slideDown'
		        });

	  });
	  
	  $("#signuppopup").bind("click", function() {
		  $('#ajaxlogintab').removeClass("selected");
		  $('#ajaxsignuptab').addClass("selected");
		  
		  $('#tab-login').hide();
		  $('#tab-register').show();
		  
		  $('#ajax_login').bPopup({
			    easing: 'easeOutBack', //uses jQuery easing plugin
		            speed: 0,
		            transition: 'slideDown'
		        });
	  });

	  
	  // Twitter popup
	  $('#twit_link').bind("click", function() {
		  $("#ajax_login").bPopup().close();
		  $('#ajax_login_twit').bPopup({
			    easing: 'easeOutBack', //uses jQuery easing plugin
		            speed: 450,
		           // transition: 'slideDown'
		        });
	  });
	  
	  $("#cross_icon_twitter_login").bind("click", function() {
 	 	  
			 $("#ajax_login_twit").bPopup().close(); 
			 
			 $('#ajaxsignuptab').removeClass("selected");
			  $('#ajaxlogintab').addClass("selected");
			  
			  $('#tab-login').show();
			  $('#tab-register').hide();
			  
			  $('#ajax_login').bPopup({
				    easing: 'easeOutBack', //uses jQuery easing plugin
			            speed: 0,
			            transition: 'slideDown'
			        });

	  });

	  
	  // End Twitter Popup
	  
	  
	  // Twitter popup at login
	  
	  $('#twit_link_login').bind("click", function() {
		  //$("#ajax_login").bPopup().close();
		  $('#ajax_login_twit_login').bPopup({
			    easing: 'easeOutBack', //uses jQuery easing plugin
		            speed: 450,
		           // transition: 'slideDown'
		        });
	  });
	  
	  $("#cross_icon_twitter_login_login").bind("click", function() {
 	 	  
			 $("#ajax_login_twit_login").bPopup().close(); 
	  });
	  
	  // End Twitter Popup at login
	  	  
	 
  // Login
$('#button-login-pop').bind('click', function() {
	$.ajax({
		url: 'index.php?route=account/ajax_login_register/validateAjaxLogin',
		type: 'post',
		data: $('#login_details :input'),
		
		dataType: 'json',
		beforeSend: function() {
			$('#button-login-pop').attr('disabled', true);
			$('#button-login-pop').after('<span class="waiting">&nbsp;<img src="catalog/view/theme/default/image/loading.gif" alt="" /></span>');
		},	
		complete: function() {
			$('#button-login-pop').attr('disabled', false);
			$('.waiting').remove();
		},				
		success: function(json) {
			$('.alert-danger, .error, .warning-tr').remove();
			
			if (json['success'] != undefined) {
				location=json['redirect'];
			} else if (json['error'] != undefined) {
				$('#login_submit_div').after('<tr class="warning-tr"><td colspan="2"><div class="alert alert-danger" style="display: none;">' + json['error'] + '</div></td></tr>');
				setTimeout(function(){$('.warning-tr').fadeOut();}, 4000); 
				$('.alert-danger').show();
				
			}
			
		}
	});	

	
});
 
$('#button-register-pop').bind('click', function() {
	$.ajax({
		url: 'index.php?route=account/ajax_login_register/ajaxregister',
		type: 'post',
		data: $('#signup_details :input'),
		dataType: 'json',
		beforeSend: function() {
			$('#button-register-pop').attr('disabled', true);
			$('#button-register-pop').after('<span class="waiting">&nbsp;<img src="catalog/view/theme/default/image/loading.gif" alt="" /></span>');
		},	
		complete: function() {
			$('#button-register-pop').attr('disabled', false);
			$('.waiting').remove();
		},				
		success: function(json) {
			$('.alert-danger, .error, .warning-tr').remove();
			
			if (json['success'] != undefined) {
				location=json['redirect'];
			} else if (json['error']!= undefined) {
				$('#signup_submit_div').after('<tr class="warning-tr"><td colspan="2"><div class="alert alert-danger" style="display: none;">' + json['error'] + '</div></td></tr>');
				setTimeout(function(){$('.warning-tr').fadeOut();}, 4000); 				
				$('.alert-danger').show();
			}
		}
	});	
});

// Twitter Login
$('#button-twit-login').bind('click', function() {
	$.ajax({
		url: 'index.php?route=account/ajax_login_register/validateTwitLogin',
		type: 'post',
		data: $('#twitter_login_details :input'),
		
		dataType: 'json',
		beforeSend: function() {
			$('#button-twit-login').attr('disabled', true);
			$('#button-twit-login').after('<span class="waiting">&nbsp;<img src="catalog/view/theme/default/image/loading.gif" alt="" /></span>');
		},	
		complete: function() {
			$('#button-twit-login').attr('disabled', false);
			$('.waiting').remove();
		},				
		success: function(json) {
			$('.alert-danger, .error, .warning-tr').remove();
			
			if (json['success'] != undefined) {
				location=json['redirect'];
			} else if (json['error'] != undefined) {
				$('#twitter_login_submit_div').after('<tr class="warning-tr"><td colspan="2"><div class="alert alert-danger" style="display: none;margin-top: 10px;">' + json['error'] + '</div></td></tr>');
				setTimeout(function(){$('.warning-tr').fadeOut();}, 4000); 
				$('.alert-danger').show();
				
			}
			
		}
	});	

	
});

// Showing error if login email id and twitter email id are different
if(typeof ozxmod_twit_error != 'undefined') {
if(ozxmod_twit_error != "") {
	
  $('#ajax_login_twit').bPopup({
	    easing: 'easeOutBack', //uses jQuery easing plugin
            speed: 450,
           // transition: 'slideDown'
        });
	
	$('#twitter_login_submit_div').after('<tr class="warning-tr"><td colspan="2"><div class="alert alert-danger" style="display: none;margin-top: 10px;">' + ozxmod_twit_error + '</div></td></tr>');
	setTimeout(function(){$('.warning-tr').fadeOut();}, 7000); 
	$('.alert-danger').show();
}
}

// End Showing error if login email id and twitter email id are different

// End Twitter Login


//Showing error if login email id and twitter email id are different at checkout

if(typeof ozxmod_twit_error_login != 'undefined') {
 if(ozxmod_twit_error_login != "") {	
	  $('#ajax_login_twit_login').bPopup({
		    easing: 'easeOutBack', //uses jQuery easing plugin
	            speed: 450,
	           // transition: 'slideDown'
	        });
		
		$('#twitter_login_submit_div_login').after('<tr class="warning-tr"><td colspan="2"><div class="alert alert-danger" style="display: none;margin-top: 10px;">' + ozxmod_twit_error_login + '</div></td></tr>');
		setTimeout(function(){$('.warning-tr').fadeOut();}, 7000); 
		$('.alert-danger').show();
 }
}

// Twitter Login at login page

$('#button-twit-login-login').bind('click', function() {
	$.ajax({
		url: 'index.php?route=account/ajax_login_register/validateTwitLogin',
		type: 'post',
		data: $('#twitter_login_details_login :input'),
		
		dataType: 'json',
		beforeSend: function() {
			$('#button-twit-login-login').attr('disabled', true);
			$('#button-twit-login-login').after('<span class="waiting">&nbsp;<img src="catalog/view/theme/default/image/loading.gif" alt="" /></span>');
		},	
		complete: function() {
			$('#button-twit-login-login').attr('disabled', false);
			$('.waiting').remove();
		},				
		success: function(json) {
			$('.alert-danger, .error, .warning-tr').remove();
			
			if (json['success'] != undefined) {
				location=json['redirect'];
			} else if (json['error'] != undefined) {
				$('#twitter_login_submit_div_login').after('<tr class="warning-tr"><td colspan="2"><div class="alert alert-danger" style="display: none;margin-top: 10px;">' + json['error'] + '</div></td></tr>');
				setTimeout(function(){$('.warning-tr').fadeOut();}, 4000); 
				$('.alert-danger').show();
				
			}
			
		}
	});	

	
});


$('#forgot_password').click(function(){
	$('#forgot_password_div').slideToggle();
});

$('#button-forgot-password').click(function(){
	$.ajax({
		url: 'index.php?route=account/ajax_login_register/sendForgotPassword',
		type: 'post',
		data: $('input[name=\'ajax_forgot_email\']'),
		dataType: 'json',
		beforeSend: function() {
			$('#button-forgot-password').attr('disabled', true);
			$('#button-forgot-password').after('<span class="waiting">&nbsp;<img src="catalog/view/theme/default/image/loading.gif" alt="" /></span>');
		},	
		complete: function() {
			$('#button-forgot-password').attr('disabled', false);
			$('.waiting').remove();
		},				
		success: function(json) {
			$('.alert-danger, .error').remove();
			
			if (json['success'] != undefined) {
				$('#login_submit_div').after('<tr class="warning-tr"><td colspan="2"><div class="alert alert-success" style="margin: 0;display: none;">' + json['success'] + '</div></td></tr>');
				setTimeout(function(){$('.alert-success').fadeOut();}, 4000);  			
				$('.alert-success, .warning-tr').show(); 
				$('#forgot_password_div').slideUp(1000); 
			} else if (json['error']!= undefined) {
				$('.forgot_text').after('<div class="alert alert-danger" style="margin: 0;display: none;">' + json['error'] + '</div>');
				setTimeout(function(){$('.alert-danger').fadeOut();}, 4000);				
				$('.alert-danger').show();
			}
		}
	});	
});

});


/* This module is copywrite to ozxmod
 * Author: ozxmod(ozxmod@gmail.com)
 * It is illegal to remove this comment without prior notice to ozxmod(ozxmod@gmail.com)
*/ 	