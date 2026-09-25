const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

async function handleContact(request, env) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS });
  }

  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { name, email, service, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Champs manquants' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...CORS } }
      );
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Qeero Contact <contact@qeero.fr>',
        to: ['agence@qeero.fr'],
        reply_to: email,
        subject: `[Nouveau contact] ${name}${service ? ` — ${service}` : ''}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:32px;background:#f8f8f6;border-radius:12px;">
            <h2 style="color:#111;margin-bottom:24px;">📩 Nouveau message depuis qeero.fr</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#555;width:120px;">Nom</td>
                <td style="padding:10px 0;color:#111;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#555;">Email</td>
                <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#22C55E;">${email}</a></td>
              </tr>
              ${service ? `<tr>
                <td style="padding:10px 0;font-weight:bold;color:#555;">Service</td>
                <td style="padding:10px 0;color:#111;">${service}</td>
              </tr>` : ''}
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#555;vertical-align:top;">Message</td>
                <td style="padding:10px 0;color:#111;white-space:pre-wrap;">${message}</td>
              </tr>
            </table>
            <hr style="margin:24px 0;border:none;border-top:1px solid #ddd;">
            <p style="color:#aaa;font-size:12px;">Envoyé depuis le formulaire de contact de qeero.fr</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      return new Response(
        JSON.stringify({ ok: false, error: err.message || 'Resend error' }),
        { status: 500, headers: { 'Content-Type': 'application/json', ...CORS } }
      );
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...CORS } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...CORS } }
    );
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Route API requests to the handler
    if (url.pathname === '/api/contact') {
      return handleContact(request, env);
    }

    // Everything else → serve static assets (the React app)
    return env.ASSETS.fetch(request);
  },
};
