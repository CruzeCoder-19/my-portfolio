import { NextResponse } from "next/server";
import { sendAutoReply, sendToOwner } from "@/lib/mailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const n = (name || "").trim();
    const e = (email || "").trim();
    const m = (message || "").trim();

    if (!n || !e || !m) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
    if (!emailOk) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // 1) send to you
    await sendToOwner({ name: n, email: e, message: m });

    // 2) auto reply to user
    await sendAutoReply({ name: n, email: e });

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
