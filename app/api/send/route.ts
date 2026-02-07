import { Resend } from "resend";
import { NextResponse } from "next/server";
import ContactFormEmail from "@/emails/contact-form";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Drew Web Studio <hi@drewwebstudio.com.au>",
      to: [process.env.CONTACT_EMAIL!],
      subject: "New Submission from Court Culture",
      replyTo: email,
      react: ContactFormEmail({ name, email, message }),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (e) {
    console.error("Send email error:", e);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
