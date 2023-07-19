import { MailDataRequired } from '@sendgrid/helpers/classes/mail';
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg: MailDataRequired = {
    to: data.email,
    from: String(process.env.EMAIL_FROM),
    subject: 'Sending with SendGrid is Fun',
    text: data.message,
    //html: data.message,
  };
  const res = sgMail.send(msg);
  return NextResponse.json(res)
}
