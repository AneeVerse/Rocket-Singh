import nodemailer from 'nodemailer';

export async function POST(request) {
  const data = await request.json(); // Parse form data from frontend

  // Configure the Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail as the email service
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER, // Sender email address
      pass: process.env.NEXT_PUBLIC_EMAIL_APP_PASS, // App password for the sender email
    },
  });

  // Set up the email options
  const mailOptions = {
    from: `"Rocket Singh Service" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
    to: process.env.NEXT_PUBLIC_TO_EMAIL, // Recipient email
    subject: `New Application for ${data.title}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Application Submission</title>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
          h2 { color: #333; font-size: 24px; margin-bottom: 20px; }
          p { font-size: 16px; color: #666; }
          .info { margin-bottom: 15px; }
          .info span { font-weight: bold; color: #333; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>New Application for ${data.title}</h2>
          <p>You have received a new application with the following details:</p>
          
          <div class="info"><p><span>Full Name:</span> ${data.fullName}</p></div>
          <div class="info"><p><span>Email:</span> ${data.email}</p></div>
          <div class="info"><p><span>Phone:</span> ${data.phone}</p></div>
          <div class="info"><p><span>Message:</span> ${data.message}</p></div>
  
          <p>Kind regards,<br>Your Rocket Singh Team</p>
        </div>
      </body>
      </html>
    `,
    text: `
      New application received for ${data.title}:
      Full Name: ${data.fullName}
      Email: ${data.email}
      Phone: ${data.phone}
      Message: ${data.message}
    `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ msg: 'Email sent successfully' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ msg: 'Error sending email' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
