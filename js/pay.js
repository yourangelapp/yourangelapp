 $(document).on('ready', function() {
     window.userId = getParam('user');
     window.amount = getParam('amount');
     window.cur = getParam('cur');

     $('.amount').text(window.cur + ' ' + window.amount);
 });


 function getParam(name) {
     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
         results = regex.exec(location.search);
     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
 }

 function showMessage(isError, message) {
     if (isError) {

         $('.feedback')
             .addClass('hide');
         $('.error')
             .removeClass('hide')
             .find('.alert')
             .text(message);
     } else {
         $('.error')
             .addClass('hide');
         $('.feedback')
             .removeClass('hide')
             .find('.alert')
             .text(message);
     }
 }
