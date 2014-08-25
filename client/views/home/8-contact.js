Template.contact.rendered = function(){

	dp('#submitButton').click(function(){
		console.log("clicked");
		dp('button').addClass( "turn-green" );
		dp("#submitButton").text(dp("#submitButton").text().replace("Send Message", "Sent"));
		var emailContents = {};
		emailContents.email = dp('input[name="email"]').val();
		emailContents.subject = dp('input[name="subject"]').val();
		emailContents.message = dp('textarea[name="message"]').val();
		Meteor.call('emailContactForm', emailContents);
	});
};
