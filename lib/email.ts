import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSWORD,
  },
})

export const mailOptions = {
  from: process.env.MY_EMAIL,
  to: process.env.MY_EMAIL,
}
