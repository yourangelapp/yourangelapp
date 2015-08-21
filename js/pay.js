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

 function showMessage(msgType, message) {
     switch ((msgType+'').toLowerCase()) {
         case 'validation':
            $('.feedback')
                 .addClass('hide');
             $('.error')
                 .addClass('hide');
             $('.validation')
                 .removeClass('hide')
                 .find('.alert')
                 .text(message);
             break;

         case 'error':
            $('.validation')
                 .addClass('hide');
             $('.feedback')
                 .addClass('hide');
             $('.error')
                 .removeClass('hide')
                 .find('.alert');
                 // .text(message);
             break;

         case 'feedback':
            $('.validation')
                 .addClass('hide');
             $('.error')
                 .addClass('hide');
             $('.feedback')
                 .removeClass('hide')
                 .find('.alert')
                 .text(message);
             break;

     }

     
 }
