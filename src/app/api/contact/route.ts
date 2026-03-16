import { NextResponse } from "next/server";
import { z } from "zod/v4";
import { getResend } from "@/lib/resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email"),
  phone: z.string().optional(),
  service: z.enum(["software", "training", "studio", "general"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const serviceLabels: Record<string, string> = {
      software: "Software Development",
      training: "Training",
      studio: "Content Studio",
      general: "General Inquiry",
    };

    await getResend().emails.send({
      from: process.env.EMAIL_FROM || "AbitHub Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Inquiry: ${serviceLabels[data.service]} — ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${data.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${data.email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${data.phone || "Not provided"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Service</td><td style="padding:8px;">${serviceLabels[data.service]}</td></tr>
        </table>
        <h3>Message</h3>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: z.prettifyError(error) },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
