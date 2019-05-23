const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports.sendMail = function(req, res) {
	const msg = {
		to: 'david.matias@techtalents.es',
		from: 'ionut.morariu@techtalents.es',
		subject: 'Sending with Twilio SendGrid is Fun',
		text: 'and easy to do anywhere, even with Node.js',
		html: '<strong>and easy to do anywhere, even with Node.js</strong>',
	};
	sgMail.send(msg);
};
