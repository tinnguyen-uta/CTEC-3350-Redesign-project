// this is an inline comment
/*
 * Created by: Carlos Cucalon
 * Created on: 10/08/2019
 * Created for: CTEC 3350
 */
// alert("hello world");
// console.log("hello world");
$(function() {
	/*
	 * Menu toggler
	 * 1. When a user clicks on the toggler the navigation should open or close
	 * 2. When a user clicks on the dropdown the dropdown menu should open or close
	 */
	let toggler = $(".navbar .navbar-toggler");
	toggler.on("click", function() {
		console.log("I was clicked");
		let mainNavigation = $("#mainNavigation");
		mainNavigation.fadeToggle(1);
		let hidecontainer = $('main');
		hidecontainer.fadeToggle(1);
		let xbutton = $('.x-button');
		xbutton.fadeToggle(1);
		let burgerbutton = $('.hamburgers-button');
		burgerbutton.fadeToggle(1);
	});
})
$(function() {
	let popup = $(".send-form");
	popup.on("click", function() {
		window.alert("This form is for display purposes, submitting this form will not send an email and will not be able to reach me. If you are interested in contacting me please send an email to: nguyenkimtin@gmail.com. Thank you");
	});
})
