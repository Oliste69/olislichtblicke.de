import type { APIRoute } from 'astro'
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const name    = data.get('name')?.toString().trim()
  const email   = data.get('email')?.toString().trim()
  const subject = data.get('subject')?.toString().trim() || 'Neue Kontaktanfrage'
  const message = data.get('message')?.toString().trim()

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Pflichtfelder fehlen.' }), { status: 400 })
  }

  const { error } = await resend.emails.send({
    from:    'Kontaktformular <onboarding@resend.dev>',
    to:      'oli@oliste.de',
    subject: `${subject} – von ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Betreff:</strong> ${subject}</p>
      <hr />
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
    replyTo: email,
  })

  if (error) {
    return new Response(JSON.stringify({ error: 'E-Mail konnte nicht gesendet werden.' }), { status: 500 })
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 })
}
