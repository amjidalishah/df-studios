var sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var sendEmail = function (options) {
  var recipient = options.recipient;
  var subject = options.subject;
  var text = options.text;
  var html = options.html;

  var msg = {
    to: recipient,
    from: 'ceo@dakotahferrari.com',
    subject: subject,
    text: text,
    html: html,
  };

  return sgMail.send(msg);
};

sendEmail({
  recipient: 'lmraza98@gmail.com',
  subject: 'Testing: Booking Confirmation',
  text: 'This can be a styled email',
  html: 'test'
});
