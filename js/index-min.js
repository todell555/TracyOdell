$(function(){function e(e){"success"==e.result?($("form#reused_form").hide(),$("#success_message").show(),$("#error_message").hide()):($("#error_message").append("<ul></ul>"),jQuery.each(e.errors,function(e,t){$("#error_message ul").append("<li>"+e+":"+t+"</li>")}),$("#success_message").hide(),$("#error_message").show(),$('button[type="button"]',$form).each(function(){$btn=$(this),label=$btn.prop("orig_label"),label&&($btn.prop("type","submit"),$btn.text(label),$btn.prop("orig_label",""))}))}$("#reused_form").submit(function(t){t.preventDefault(),$form=$(this),$('button[type="submit"]',$form).each(function(){$btn=$(this),$btn.prop("type","button"),$btn.prop("orig_label",$btn.text()),$btn.text("Sending ...")}),$.ajax({type:"POST",url:"/home3/tracyyar/public_html/tracyodell/handler.php",data:$form.serialize(),success:e,dataType:"json"})})}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}})});