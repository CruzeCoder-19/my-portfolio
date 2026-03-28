import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT || 587),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// 1) Send message to YOU
export async function sendToOwner({ name, email, message }) {
  const to = process.env.CONTACT_RECEIVER_EMAIL || process.env.EMAIL_USER;

  return transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to,
    replyTo: email, // you can hit "Reply" and it replies to the user
    subject: `New Contact Message - ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Message:</b></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `,
  });
}

// 2) Auto-reply to USER
export async function sendAutoReply({ name, email }) {
  return transporter.sendMail({
    from: `"Manabendra" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thanks for contacting me!",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <p>Hi ${escapeHtml(name)},</p>
        <p>Thanks for reaching out. I received your message and I’ll get back to you soon.</p>
        <p style="margin-top: 16px;">Regards,<br/>Manabendra</p>
      </div>
    `,
  });
}
