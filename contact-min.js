$(function(){$("#contact-form").validator(),$("#contact-form").on("submit",function(t){if(!t.isDefaultPrevented()){return $.ajax({type:"POST",url:"contact.php",data:$(this).serialize(),success:function(t){var a="alert-"+t.type,e=t.message,s='<div class="alert '+a+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+e+"</div>";a&&e&&($("#contact-form").find(".messages").html(s),$("#contact-form")[0].reset(),grecaptcha.reset())}}),!1}})});