 $(document).on('ready', function() {
     window.userId = getParam('user');
     window.amount = getParam('amount');
     window.cur = getParam('cur');

     $('.amount').text(window.cur + ' ' + window.amount);
 });
