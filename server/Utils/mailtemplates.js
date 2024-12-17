function Mail(Name, Domain, Sports) {
  let selectedActivity = "";
  if (Domain === "Sports") {
    selectedActivity = `<li><strong>Selected Sports:</strong> ${Sports}</li>`;
  } else if (Domain === "ESports") {
    selectedActivity = `<li><strong>Selected E-Sports:</strong> ${Sports}</li>`;
  }
  let click = `https://desportivos-2k25.vercel.app/register`;

  const MailTemplate = {
    title: "Test Email",
    html: `<!DOCTYPE html>
<html>
  <head>
    
  </head>
  <body style="font-family: Arial, sans-serif;line-height: 1.6;margin: 0;padding: 0;background-color: #f4f4f4;">
    <div class="email-container" style="max-width: 600px;margin: 20px auto;background: #ffffff;border: 1px solid #dddddd;border-radius: 8px;overflow: hidden;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <div class="email-header" style="background-color: #cc4b00;color: #ffffff;padding-top: 20px;padding-bottom: 20px;display: flex;align-items: center;justify-content: center;">
        <img src="https://res.cloudinary.com/dturzqo8m/image/upload/v1732778532/xvllv0mgxvf2soy1iobd.png" alt="Desportivos 25" style="margin-bottom:65px;margin-right:20px;width:50px;height:50px">
        <h1 style="padding: 20px;font-size: 1.8rem;margin: 0;">Welcome to Desportivos 2025!</h1>
      </div>

      <div class="email-body" style="padding: 20px;color: #333333;">
        <p style="margin: 0;padding: 0;">Dear <strong>${Name}</strong>,</p>
        <p style="margin: 0;padding: 0;">
          Thank you for registering for the
          <strong>Sports Fest Desportivos 2025</strong>. We are excited to have
          you on board!
        </p>
        <p style="margin: 0;padding: 0;"><strong>Your Details:</strong></p>
        <ul>
            <li><strong>Domain:</strong> ${Domain}</li>
            ${selectedActivity}
        </ul>
        <p style="margin: 0;padding: 0;">
          Get ready to showcase your skills and passion in an event filled with
          energy, competition, and fun. We will keep you updated with the event
          schedule and other details via email.
        </p>
        <p style="margin: 0;padding: 0;">If you have any questions, feel free to reach out to us.</p>
        <div class="contact-header" style="margin-top: 40px;">
          <h3>Contact Details</h3>
        </div>
        <div class="contact-details" style="margin-bottom: 20px;">
          <p style="margin: 0;padding: 0;"><strong>Hardik Makkar: +91 9990660200</strong></p>
          <p style="margin: 0;padding: 0;"><strong>Himendra Yaduvanshi: +91 8890605538</strong></p>
          <p style="margin: 0;padding: 0;"><strong>Rajat Satonkar: +91 7499263746</strong></p>
          <p style="margin: 0;padding: 0;"><strong>Shreyansh Singh Rathore: +91 8854072705</strong></p>
        </div>
        
        <div style="display: flex; align-items: center;">
          <p style="margin: 0; padding: 0; margin-right: 5px;">To Register for another event</p>
          <a href="${click}" style="color: #cc4b00; text-decoration: none;">Click Here</a>
        </div>
      </div>

      <div class="email-footer" style="background-color: #cc4b00;color: #ffffff;padding: 10px;text-align: center;font-size: 0.9em;">
        <p style="margin: 0;padding: 0;">&copy; 2025 Sports Fest Desportivos | All Rights Reserved</p>
      </div>
    </div>
  </body>
</html>
`,
  };

  return MailTemplate;
}

export default Mail;
