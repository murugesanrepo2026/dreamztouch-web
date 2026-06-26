// lib/email.ts
import nodemailer from 'nodemailer';

// Create a transporter using Gmail (replace with your SMTP settings)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,    // your email
    pass: process.env.EMAIL_PASS,    // your app password
  },
});

/**
 * Send a password reset email to the user.
 * @param to - recipient email address
 * @param resetLink - the password reset URL
 */
export async function sendResetEmail(to: string, resetLink: string) {
  const mailOptions = {
    from: `"Your App" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Password Reset Request',
    html: `
      <p>You requested a password reset.</p>
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}" target="_blank">${resetLink}</a>
      <p>This link expires in 1 hour.</p>
      <p>If you didn't request this, please ignore this email.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Password reset email sent to ${to}`);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}