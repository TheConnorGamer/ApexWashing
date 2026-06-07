import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFY_EMAIL;

    if (!apiKey || !notifyEmail) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 },
      );
    }

    const form = await request.formData();

    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const address = String(form.get("address") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();
    const date = String(form.get("date") ?? "").trim();
    const slot = String(form.get("slot") ?? "").trim();
    const notes = String(form.get("notes") ?? "").trim();

    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    const attachments: { filename: string; content: Buffer }[] = [];
    const photoEntries = form.getAll("photos");

    for (const entry of photoEntries) {
      if (entry instanceof File && entry.size > 0) {
        const buffer = Buffer.from(await entry.arrayBuffer());
        attachments.push({ filename: entry.name, content: buffer });
      }
    }

    const from =
      process.env.RESEND_FROM_EMAIL ??
      "Apex Exterior Co. <onboarding@resend.dev>";

    const lines = [
      ["Name", name],
      ["Phone", phone],
      ["Email", email],
      ["Address", address || "—"],
      ["Service", service],
      ["Preferred date", date || "—"],
      ["Preferred window", slot || "—"],
      ["Notes", notes || "—"],
      ["Photos attached", String(attachments.length)],
    ];

    const html = `
      <div style="font-family: Georgia, serif; color: #14130f; max-width: 560px;">
        <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #b6924f; margin: 0 0 24px;">
          New estimate request
        </p>
        <h1 style="font-size: 28px; font-weight: 400; margin: 0 0 32px;">
          ${name}
        </h1>
        <table style="width: 100%; border-collapse: collapse; font-size: 15px; line-height: 1.6;">
          ${lines
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e2d4; color: #8d8676; width: 140px; vertical-align: top;">${label}</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e2d4;">${value}</td>
            </tr>`,
            )
            .join("")}
        </table>
        <p style="margin-top: 32px; font-size: 13px; color: #8d8676;">
          Reply directly to this customer at <a href="mailto:${email}" style="color: #b6924f;">${email}</a>
        </p>
      </div>
    `;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: notifyEmail,
      replyTo: email,
      subject: `New estimate: ${name} — ${service}`,
      html,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send notification. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Estimate API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
