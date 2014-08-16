process.env.MAIL_URL='smtp://victor%40victorlinphoto.com:' + encodeURIComponent("PUT PASSWORD HERE") + '@smtp.gmail.com:465';

contactMailer = function(contactFormContents){

	var contactFormContents = contactFormContents;
	Email.send({
	  from: "agooster@gmail.com",
	  to: "chtmorris@icloud.com",
	  // ShoppingCartObject.customerInfo.agentEmail,
	  subject: contactFormContents.subject,
	  text: contactFormContents.email + " has just sent you this message: " + contactFormContents.message
	});

};


Meteor.methods({

	emailContactForm: function(contactFormContents){
		return contactMailer(contactFormContents);
	}

});