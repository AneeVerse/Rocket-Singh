import nodemailer from "nodemailer";

export async function POST(request) {
  const { interest, name, email, message } = await request.json();

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_APP_PASS,
    },
  });

  // Set up email options
  const mailOptions = {
    from: `"Rocket Singh Contact Form" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
    to: process.env.NEXT_PUBLIC_TO_EMAIL,
    subject: `New Contact Form Submission: ${interest}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    text: `
      New Contact Form Submission:
      Interest: ${interest}
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ msg: "Message sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ msg: "Failed to send message" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
