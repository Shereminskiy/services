/**
 * Created by alex on 13.10.15.
 */
$(function() {
   $('#signin').on('click', function(e){
       e.stopPropagation();
       e.preventDefault();
       $.post('/auth/local', $('#login-form').serialize(), function(res) {
           if(res.success === true) {
               location.reload();
           } else {
               $('.login-error-text-block').text(res.error);
               $('#login-error-block').show();
           }
       })
   })
});
