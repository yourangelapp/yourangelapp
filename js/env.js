$(window).on('load', function(e){

	window.env ={};

	//Staging
	// window.env.stripePublishableKey = 'pk_test_1MCAeHbEvwZ4ILhJ8PEOh3mR';
	// window.env.apiPay = 'http://yourangelapptest.herokuapp.com/pay/';
	// window.env.apiCreate = 'http://yourangelapptest.herokuapp.com/create/';

	//Production
	window.env.stripePublishableKey = 'pk_live_vKiJmNbACUjtwysY7CmDtcnk';
	window.env.apiPay = 'http://yourangelapp.herokuapp.com/pay/';
	window.env.apiCreate = 'http://yourangelapp.herokuapp.com/create/';
});