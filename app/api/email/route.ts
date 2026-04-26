import { NextRequest, NextResponse } from "next/server"
import { transporter, mailOptions } from "@/lib/email"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  try {
    const { name, email, title, message } = await req.json()

    if (!name || !email || !title || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    await transporter.sendMail({
      ...mailOptions,
      subject: `Message from ${name} (${email})`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${title}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    })

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
