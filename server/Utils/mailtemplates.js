function Mail(Name) {
  const MailTemplate = {
    title: "Test Email",
    html: `<p>Hi ${Name},<br /><br />Thank you for registering for Despo'2K25! We are thrilled to have you join us. Stay tuned for more updates about the event.<br /><br />Best regards,\nThe Despo'2K25 Team</p>`,
  };

  return MailTemplate;
}

export default Mail;
