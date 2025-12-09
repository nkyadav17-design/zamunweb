import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Support both new (firstName/lastName) and old (name) formats
    const {
      firstName,
      lastName,
      phone,
      email,
      message,
      name, // fallback if someone still sends `name`
    } = body;

    const fullName =
      name || [firstName, lastName].filter(Boolean).join(" ").trim();

    // Validation: require firstName (or name), email, phone, message
    if (!fullName || !email || !message || !phone) {
      return NextResponse.json(
        { error: "First name, phone, email & message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false, // STARTTLS
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER, // e.g. nawal@zamun.com
        pass: process.env.EMAIL_PASS, // password / app password
      },
    });

    const mailOptions = {
      from: `"Zamun Website" <${process.env.EMAIL_USER}>`,
      to: "nawal@zamun.com",
      bcc: ["connect@zamun.com", "dinesh@zamun.com"],
      replyTo: email,
      subject: "New Enquiry from Zamun Website",
      html: `
        <h3>New Enquiry Received</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        ${
          firstName || lastName
            ? `<p><strong>First Name:</strong> ${firstName || ""}</p>
               <p><strong>Last Name:</strong> ${lastName || ""}</p>`
            : ""
        }
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
