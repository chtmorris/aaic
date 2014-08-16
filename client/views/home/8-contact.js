Template.contact.rendered = function(){

	$('#submitButton').click(function(){
		console.log("clicked");
		var emailContents = {};
		emailContents.email = $('input[name="email"]').val();
		emailContents.subject = $('input[name="subject"]').val();
		emailContents.message = $('textarea[name="message"]').val();

		console.log(emailContents);

		Meteor.call('emailContactForm', emailContents);

	});

};