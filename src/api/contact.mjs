// api/contact.mjs  (ESM + CORS)
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = process.env.CONTACT_TO || 'hello@clinichub.com';
const FROM = process.env.FROM_EMAIL || 'onboarding@resend.dev';

// For prod, set CORS_ORIGIN to your site origin(s). For quick tests, '*' is OK.
const ORIGIN = process.env.CORS_ORIGIN || '*';

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST', 'OPTIONS']);
      return res.status(405).json({ error: 'Method not allowed' });
    }

    let data = req.body;
    if (typeof data === 'string') {
      try { data = JSON.parse(data); } catch {}
    }

    const { name, email, practice, message } = data || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    await resend.emails.send({
      from: `ClinicHub <${FROM}>`,
      to: [TO],
      subject: `New message from ${name} (${email})`,
      replyTo: email, // camelCase
      text: `Practice: ${practice || '-'}\n\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({ error: 'Failed to send' });
  }
}
