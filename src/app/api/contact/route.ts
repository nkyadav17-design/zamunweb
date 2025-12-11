import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    // ✅ 1. CHECK ENV VARIABLES BEFORE ANYTHING ELSE
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email credentials missing in environment variables");
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please contact us at connect@zamun.com.",
        },
        { status: 500 }
      );
    }

    // 2. Parse data from request
    const body = await req.json();
    const { firstName, lastName, phone, email, message, name } = body;

    const fullName =
      name || [firstName, lastName].filter(Boolean).join(" ").trim();

    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "First name, phone, email & message are required." },
        { status: 400 }
      );
    }

    // 3. Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 4. Email content
    const mailOptions = {
      from: `"Zamun Website" <${process.env.EMAIL_USER}>`,
      to: "nawal@zamun.com",
      bcc: ["connect@zamun.com", "dinesh@zamun.com"],
      replyTo: email,
      subject: "New Enquiry from Zamun Website",
      html: `
        <h3>New Enquiry Received</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // 5. Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });

  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          error?.message || "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
