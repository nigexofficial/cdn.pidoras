const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const PORT = 3000;

const EMAIL_USER = "nigex@pidoras.xyz";
const EMAIL_PASS = "no";

const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true,
  auth: {
    user: "nigex@pidoras.xyz",
    pass: "no";
  },
});

function sendEmail() {
  return transporter.sendMail({
    from: EMAIL_USER,
    to: "mpasb@pidoras.xyz",
    subject: "Sigma",
    text: "Sigma",
    html: `
      <h1 style="color: #ff9800;">Welcome to the HTML Email</h1>
    `,
  });
}

app.get("/trigger", async (req, res) => {
  try {
    await sendEmail();
    res.json({ message: "Email sent successfully" });
  } catch {
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
