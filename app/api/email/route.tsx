import { NextResponse, NextRequest } from "next/server";
import { transporter, mailOptions } from "@/app/config/email";

export const POST = async (req: NextRequest) => {
  try {
    const { email, name, message } = await req.json();
    console.log('Received data:', { email, name, message });

    // Sending email with transporter and mailOptions
    await transporter.sendMail({
      ...mailOptions,
     
      subject: `Message from ${name} (${email})`, // Changed subject to include name and email
      text: message,
      html: `<p>${message}</p>`,
    });

    // Return success response if the email is sent successfully
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (error) {
    // If error occurs, log it and return a 500 error response
    if (error instanceof Error) {
      console.error('Error sending email:', error.message);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    } else {
      console.error('Unknown error occurred');
      return NextResponse.json({ error: 'Unknown error occurred' }, { status: 500 });
    }
  }
};
