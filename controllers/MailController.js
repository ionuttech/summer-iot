const sgMail = require('@sendgrid/mail');

module.exports.sendMail = function(req, res) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
		to: 'david.matias@techtalents.es',
		from: 'ionut.morariu@techtalents.es',
		subject: 'Sending with Twilio SendGrid is Fun',
		text: 'and easy to do anywhere, even with Node.js',
		html: '<strong>and easy to do anywhere, even with Node.js</strong>',
	};
	sgMail.send(msg);
	res.status(200).send('sent');
};
