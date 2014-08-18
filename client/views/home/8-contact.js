Template.contact.rendered = function(){

	dp('#submitButton').click(function(){
		console.log("clicked");
		var emailContents = {};
		emailContents.email = dp('input[name="email"]').val();
		emailContents.subject = dp('input[name="subject"]').val();
		emailContents.message = dp('textarea[name="message"]').val();

		console.log(emailContents);

		Meteor.call('emailContactForm', emailContents);

	});

};
