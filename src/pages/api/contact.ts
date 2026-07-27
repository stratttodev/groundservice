export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";
import React from "react";
import ContactNotification from "../../emails/ContactNotification";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { nombre, empresa, email, telefono, mensaje, website } = body;

  // Honeypot: silently discard bot submissions
  if (website) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  if (!nombre || !empresa || !email || !mensaje) {
    return new Response(
      JSON.stringify({ ok: false, error: "Faltan campos obligatorios" }),
      { status: 400 }
    );
  }

  // TODO: cambiar 'onboarding@resend.dev' por un remitente del dominio groundservice.cl una vez verificado en el dashboard de Resend.
  const { error } = await resend.emails.send({
    from: "GroundService <onboarding@resend.dev>",
    to: [import.meta.env.CONTACT_EMAIL_TO],
    subject: `Nueva cotización — ${empresa}`,
    react: React.createElement(ContactNotification, {
      nombre,
      empresa,
      email,
      telefono,
      mensaje,
    }),
  });

  if (error) {
    return new Response(
      JSON.stringify({ ok: false, error: error.message }),
      { status: 500 }
    );
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
